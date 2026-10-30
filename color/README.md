# Color palette generator

Give the generator any opaque sRGB hex color and it produces candidate color scales and light/dark starting roles. A primary color is preferred because it gives the generator a clear role; a reference color also works. It accepts opaque sRGB hex colors (`#rgb` or `#rrggbb`) and runs locally with Node.js; there are no dependencies.

```sh
node color/palette.js "#3366cc"
node color/palette.js "#e54b4b" complementary
node color/palette.js "#8050b0" triadic
node color/palette.js "#2e4057" analogous --reference
node color/palette.js "#63914b" analogous --allow-earth-tones
node color/palette.test.js
```

Available relationships are `monochromatic`, `analogous` (default), `complementary`, `split-complementary`, `triadic`, and `tetradic`. Output is JSON; redirect it to a file if needed. The JavaScript can also be imported:

```js
const { generatePalette, contrast } = require('./color/palette.js');
const palette = generatePalette('#3366cc', { scheme: 'analogous' });
console.log(palette.roles.light);
console.log(contrast('#000000', '#ffffff')); // 21
```

## What the math does

1. Convert the supplied sRGB color to OKLCH: perceptual lightness, chroma, and hue. OKLCH offers a more useful basis for varying perceived lightness than conventional HSL. The [CSS Color specification](https://www.w3.org/TR/css-color-4/) describes the color space and conversion process.
2. Create eleven numbered tones from 50 (light) to 950 (dark). They are sample points across a continuous range, not an exhaustive catalog of all colors. The exact input is preserved in `input`. By default it is also used as the `primary` role; with `--reference` it serves as a starting point and the 500 tone is proposed as primary instead. The 500 tone is not guaranteed to equal the input.
3. Rotate hue in OKLCH to create candidate accents: ±30° for analogous, 180° for complementary, 150° and 210° for split-complementary, 120° and 240° for triadic, or 60°, 180°, and 240° for tetradic. These are adjustable design heuristics, not guarantees of harmony. Different color wheels can produce different results. The [University of Washington color guide](https://depts.washington.edu/deshelp/toolkit/ColorGuide.pdf) illustrates common harmony relationships.
4. Reduce chroma at the light and dark ends and, when necessary, use a binary search to bring colors into sRGB while keeping lightness and hue approximately fixed. This is a simple chroma-reduction method, not the CSS specification's full gamut-mapping algorithm. Outputs are ordinary six-digit hex values.
5. Use neutral gray by default to avoid automatically pairing green with beige. With an explicit `--allow-earth-tones` request, use a restrained neutral scale related to the input hue. Nearly gray inputs have no reliable hue, so they produce neutral scales and no automatically invented accent hues. Choose an accent explicitly if needed.
6. Suggest light and dark background, surface, text, muted text, and primary roles. For text on the suggested primary role, pick whichever of black or white has better WCAG contrast. `contrast` contains measured ratios for the suggested text/background combinations.

## How to use the results

- Ask for a primary color if the user has not supplied a color, but accept any reference color. Confirm its intended role rather than assuming. With `--reference`, the original input is preserved in the output but is not forced into the primary role.
- Avoid the green, olive, and beige combination by default; use `--allow-earth-tones` only when the user explicitly requests it. The default makes neutrals gray and omits warm yellow/olive accent candidates when the input hue is green; omitted hue angles appear in `policy.omittedAccentHues`. This is a conservative numerical heuristic, not a visual guarantee: review the actual palette. The input is never rejected or altered merely because it is green, olive, or beige. A filter may leave fewer accent families than requested.
- Start with a relationship that fits the brief. Monochromatic and analogous candidates are useful starting points for restrained interfaces; complementary and triadic options offer more hue contrast. Compare alternatives in actual screens instead of treating one relationship as universally best.
- Choose colors by role, not just by appearance in a strip: background, surface, primary action, text, border, focus, and feedback all have different requirements. The output is a starting point; it does not define a complete product design system.
- Check every actual foreground/background pair in its real state. WCAG AA generally requires **4.5:1 for normal text** and **3:1 for large text**; meaningful UI boundaries and graphical indicators generally need **3:1 against adjacent colors**, subject to the criteria's exceptions. Do not round a failing ratio up to a pass. See [text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) and [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast).
- `onPrimary` reports whether black or white passes against the suggested opaque primary role. The listed ratios apply only to the pairs named, not to hover, disabled, focus, translucent, gradient, image, or chart states. Borders, accents, and state indicators need separate checks. Do not rely on color alone to convey meaning.
- Review the result in context for brand, audience, content, tone, color-vision differences, and light/dark use. Harmony calculations do not determine aesthetic quality or guarantee accessibility.

## Validation

`palette.test.js` checks known contrast values, sRGB conversion round trips, color formats, representative extremes and saturated colors, schemes, contrast of suggested text pairs, neutral inputs, and invalid input. It is not a substitute for testing the rendered interface.

# Color

## Color hierarchy: from palette to interface

A palette is a collection of possible colors. A color hierarchy decides **what each color does**: which areas recede, what text is readable, what is interactive, and what needs attention. There is no universal formula that makes a palette attractive or assigns every color automatically. Use the product's content, brand, user needs, and actual interface as the final test.

The approach below uses **semantic roles**: names such as `surface`, `text`, and `action-primary` describe a color's job rather than its hex value. Each theme maps those roles to appropriate colors. This makes components easier to understand and lets the same role change between light and dark themes. [Atlassian's token guidance](https://atlassian.design/foundations/design-tokens) and [Material's color roles](https://m3.material.io/styles/color/the-color-system) use this approach.

### 1. Start with the brief and the color

1. Ask for the user's primary color if they haven't supplied a color. A primary color is the clearest anchor, but any reference color can be used: ask what role it should play. If the user has no preference, select an appropriate starting color for the product.
2. Preserve explicitly supplied colors in their requested role. If the exact color does not work for a particular use, explain the conflict and propose a related tone or a different use; don't silently replace the brand color.
3. Generate candidate tones and accents with the [palette generator](../color/README.md). Treat its output as material to select from, not a finished design system. An accent is optional; do not use a color merely because it appears in the generated output.
4. Avoid the green, olive, and beige combination seen in the original examples unless the user requests it. A user-supplied green is valid and must be respected. The generator has a default heuristic to reduce that combination, but the interface still needs visual review.

### 2. Assign roles in order

| Role | Job | How to choose it |
| --- | --- | --- |
| Page background | The base behind the interface. | Choose a comfortable neutral or restrained tint. It should let content and controls stand out. |
| Surface and raised surface | Cards, panels, menus, dialogs, and inputs. | Separate layers with a small color difference, border, shadow, or spacing. Don't color every container differently. |
| Primary text | Main reading content, headings, and important data. | Select a foreground that meets text contrast against every surface it appears on. |
| Secondary text | Supporting information that still matters. | Use a quieter color than primary text, but keep it readable and contrast-compliant. De-emphasis is not an excuse for illegibility. |
| Primary action | The most important available action in a given context. | Choose a fill or outline that stands out against its surroundings. Pair it with an independently tested `on-primary` text/icon color. |
| Secondary and tertiary actions | Alternatives and less prominent actions. | Use an outline, neutral fill, or text treatment that remains recognizable and does not compete equally with every primary action. |
| Links and active navigation | Navigation and selected state. | Use a recognizable treatment, such as an underline for inline links or a filled selected row for navigation. Keep icons and labels legible. Do not rely on a colored edge stripe or decorative dot. |
| Borders and dividers | Separate areas or define controls. | Decorative separators can be subtle. A boundary needed to identify a control or its state must be visible against adjacent colors. |
| Focus | Shows where keyboard interaction will occur. | Use a clearly visible focus indicator with adequate contrast against the colors next to it; check it on every surface. |
| Status and feedback | Error, warning, success, and information. | Give each a consistent meaning and an appropriate foreground/background pair. Add text, an icon, or another cue so color is not the only signal. |
| Accent and data colors | Categorize data or add limited emphasis. | Use only as needed, keep categories distinguishable, and don't assign conflicting meanings. Test chart marks and their backgrounds. |

A color can serve more than one role only if it works in each context. Conversely, a single role can use different values across themes and states. A low-contrast decorative divider and a required input boundary, for example, should not automatically share a token.

### 3. Match color intensity to its job

**When the starting color is vivid:** A highly saturated color can be useful for a primary action or a small, deliberate accent. It can dominate when repeated across large backgrounds, every card, and every button. For quieter surfaces, use a lighter or less saturated related tone, or a neutral. On text or icons, don't assume the vivid color is readable against white: measure it. If it fails, use a darker tone, a different surface, or another foreground. Preserve the exact brand color where it works.

**When the starting palette is soft:** Soft colors can work well for surfaces and secondary emphasis, but a collection of similarly light or muted colors may not provide enough separation. Introduce a sufficiently dark text tone and a distinct action treatment. A pale brand color can remain visible as a background while a darker related tone is used for text or controls. Soft does not have to mean low contrast.

**When the supplied color is very dark or very light:** Its role depends on what it is next to. A dark color may work as a button fill with light text or as text on a light surface. A light color may work as a surface with dark text but fail as text on white. Test both relationships. For example, `#2E4057` with white text measures about **10.57:1**; `#E0C5F4` as text on white measures about **1.56:1**, so it is unsuitable for normal text on white. A darker related tone, `#513A61`, measures about **9.87:1** on white. These are examples, not prescribed colors.

**When a vivid color is too light for white text:** `#FF4D00` with white measures about **3.33:1**, below the normal-text minimum. Black on the same fill measures about **6.31:1**. Alternatively, `#CF3D00` with white measures about **4.86:1**. Choose according to the brand and component, then verify the actual pair. A bright color is not automatically dark enough for white text.

### 4. Build emphasis and states

- **Hierarchy:** Decide what the user needs to notice first, second, and third. Use neutral surfaces and readable text as a stable base; reserve the strongest contrast or saturation for important actions and feedback. A page full of equally prominent buttons has no clear primary action. Don't force a fixed color-area percentage onto every layout.
- **Default:** Identify the control and its purpose clearly. Test text against its fill and any boundary needed to distinguish it from the surrounding surface.
- **Hover:** Use a subtle, visible change such as a related tone. Retest its text and boundary; hover must not be the only way to discover essential content.
- **Pressed:** Provide a brief, distinct response while retaining readable content. Don't make the active control look disabled.
- **Focus:** Show keyboard focus with a visible outline or equivalent indicator. Test it against the adjacent colors, including when the control is selected or inside a dialog. Don't remove the browser's focus indicator without replacing it.
- **Selected:** Distinguish the selected item with a filled background, text weight, icon, label, or another clear cue. If color alone cannot convey the state, add another indicator. Keep the treatment consistent across navigation and selectable controls.
- **Disabled:** Make unavailable actions distinguishable and explain why when useful. WCAG has exceptions for inactive controls, but don't use that as a reason to make important information unreadable. Never use color as the sole indication of availability.
- **Errors and warnings:** Use concise text identifying the issue and how to fix it. Pair colors with labels or icons; avoid implying a positive state merely because a brand color happens to be green.

### 5. Light and dark themes

Design each theme intentionally. Dark mode is not simply every light-mode hex value inverted. Give each semantic role its own value for each theme, and verify the pairings independently. [Apple's dark-mode guidance](https://developer.apple.com/design/human-interface-guidelines/dark-mode) describes adaptive semantic colors and testing both appearances.

- **Light:** Start with a light page background, distinguishable surfaces, and dark primary text. Use a brand tone for key actions only where it remains readable and recognizable.
- **Dark:** Start with a dark page background and distinguishable dark surfaces. Use light text and adjust brand accents if the exact color disappears against the dark surface. A user's exact brand color can remain in a logo or another suitable role.
- **Layers:** Use small, deliberate differences between page, sidebar, card, and menu surfaces. Add a border or shadow where necessary instead of relying on a barely visible color change.
- **Navigation:** Style sidebars according to the product's own palette. Use a restrained selected fill and aligned outline SVG icons; don't copy a reference site's exact colors.
- **Adaptation:** If light and dark modes are supported, respect the system preference where appropriate and test both themes, including images, icons, charts, focus, and overlays.

### 6. Check contrast and meaning

For opaque sRGB colors, WCAG contrast is based on relative luminance: `(lighter + 0.05) / (darker + 0.05)`. The [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) defines the calculation and its exceptions.

- Normal text generally needs **at least 4.5:1**; large text generally needs **at least 3:1**. Large text means at least 18 pt regular or 14 pt bold, approximately 24 CSS px regular or 18.67 CSS px bold. Do not round a failing result up to a pass.
- Visual information necessary to identify active controls, their states, and meaningful graphics generally needs **at least 3:1 against adjacent colors**. Decorative elements and inactive components have exceptions. Check the actual indicator and its adjacent colors, not an unrelated pair. [W3C non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast).
- Don't convey information by color alone. Add text, patterns, shapes, underlines, or other cues as appropriate. [W3C use of color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color).
- Test the actual rendered combinations: text and icons on their backgrounds; input boundaries; selected and focus indicators; chart marks; hover and pressed states; and both themes. For transparency, gradients, or images, evaluate the resulting colors in context rather than assuming the original hex pair is sufficient.
- Chart colors need to distinguish categories or a sequence, depending on the data. Provide labels or another way to read the data, and test meaningful marks against adjacent colors. [Carbon's data-visualization palettes](https://www.carbondesignsystem.com/building-blocks/data-visualization/color-palettes) distinguish categorical and ordered palettes.

### 7. Apply the generator without mistaking ranges for roles

```sh
node color/palette.js "#2E4057" analogous
node color/palette.js "#E0C5F4" analogous --reference
```

The output's `primary`, `neutral`, and `accents` are **tone ranges**, not instructions to place every color on the page. Lower numbers are lighter and higher numbers are darker; `500` is a sample tone, not necessarily the supplied color. `roles` contains only initial light/dark suggestions and `contrast` checks a few named pairs. The tool does not automatically assign every state or verify the finished interface. See the [generator guide](../color/README.md) for options and limitations.

A useful workflow is: **choose a color → generate candidates → assign roles → check actual pairs and states → review in context**. Adjust the tones and their usage until the product communicates clearly and fits the brief.

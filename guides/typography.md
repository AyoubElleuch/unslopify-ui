# Typography

## Typography hierarchy: a practical map

Typography has no universal formula: typefaces with the same nominal size can have different apparent sizes and stroke thicknesses. Start with the audience, reading distance, language, content density, and brand; then judge real text in the finished layout. The following is a **starting system for web apps**, not a WCAG-mandated scale. For reading-heavy sites, start body text at 18–20px and increase line length and spacing with care.

| Role | Starting size / line height | Weight | Color and use |
| --- | --- | --- | --- |
| Display / hero | 40–56px / 1.05–1.2 | 600–700 | Primary text; use sparingly for a prominent short message. Scale down on narrow screens. |
| Page title | 28–36px / 1.15–1.25 | 600–700 | Primary text; one clear entry point per view. |
| Section heading | 20–24px / 1.25–1.35 | 600–700 | Primary text; separate major groups. |
| Card / subsection heading | 16–18px / 1.3–1.4 | 600 | Primary text; use a smaller step than the section heading. |
| Body / form content | 16px / 1.5 | 400 | Primary text; use for paragraphs, instructions, and input values. |
| Controls / navigation / tables | 14–16px / 1.4–1.5 | 400–500; 600 for emphasis | Primary or readable secondary text; keep labels and data easy to scan. |
| Secondary information | 14px / 1.4–1.5 | 400–500 | Secondary text with measured contrast; use for dates, descriptions, and supporting context. |
| Compact metadata | 12–13px / 1.4–1.5 | 400–500 | Use sparingly for short nonessential labels, never long reading, key instructions, or errors. Increase it if the font or audience requires it. |
| Key number | 24–32px / 1.15–1.25 | 600–700 | Primary text; pair with a readable label and units. Use tabular numerals for aligned changing values. |

### How to choose and apply it

1. **Choose the font for the job.** Compare a legible interface family such as Inter, Source Sans 3, or IBM Plex Sans against the actual content, numerals, punctuation, supported languages, and fallback fonts. A serif or distinctive display face can fit a brand; use a readable text face for dense UI. Check licenses and load only the weights needed. Do not force one font on every product.
2. **Build hierarchy from roles.** Use a small number of recurring styles; choose size first, then line height and weight. Distinguish related levels without making every label bold. Use semantic headings in logical order, regardless of their visual size. Keep reading order and emphasis meaningful.
3. **Balance size and weight.** Start body text at 400; use 500–600 for labels and 600–700 for short headings or important values. Avoid very heavy small text, tightly spaced uppercase, and hairline large text: examine the actual rendered font, since weight numbers differ between families. Weight alone cannot rescue text that is too small or too low contrast.
4. **Set line height and measure.** Start prose at about 1.5–1.6 and headings around 1.1–1.3; adjust to the typeface and script. For long Latin-script paragraphs, start around 45–75 characters per line and check real content; do not apply this blindly to other scripts. Use normal letter spacing for body text. Let labels and containers wrap or grow instead of clipping.
5. **Assign colors by role and measure each pairing.** Normal text generally needs at least **4.5:1** against its actual background; large text (at least 24px regular or approximately 18.67px bold) needs **3:1**, subject to WCAG exceptions. Prefer 4.5:1 or better even for large text when feasible, particularly for thin fonts. Secondary text, placeholders, chart labels, errors, and text on colored cards still need appropriate contrast; choose a darker or lighter palette tone rather than a faint gray. Do not round up a failing ratio. See [W3C contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum).
6. **Adapt and verify.** Use relative units for text, preserve user font settings, and check desktop and mobile, long labels, localization, dark and light surfaces, and real data. Verify text can resize to 200% without loss of content or functionality and layouts reflow; test user overrides of 1.5× line height, 2× paragraph spacing, 0.12× letter spacing, and 0.16× word spacing without loss. These are override tests, not required default values. See [W3C resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) and [text spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html).

### Dense interfaces: choose the role before the size

1. Inventory the **actual rendered text** in every view, including charts, schedule cells, table headers, date controls, secondary lines, empty states, and overlays. Record its job, font, size, weight, line height, foreground, and actual background. Check responsive rules and inline styles too; a base style does not fix a more specific or later rule.
2. Classify each item by use: titles orient the user; primary data, status, labels, and values support decisions; supporting details explain those values. De-emphasize supporting details with weight or spacing while keeping them readable. Delete filler, but do not hide useful data just because it is secondary.
3. For a task-focused app, start table headers, schedule labels, values, and status text at **14px / 20px**, usually weight 400–600; use **16px / 24px** for reading and **20px / 26px** for section headings. Short supporting metadata may start at **13px / 18–20px**, but increase it if it is needed to perform the task or proves difficult to read. These are project defaults, not legal minimums. No important schedule, chart, or control text should be reduced to 8–10px to make it fit.
4. Give text room: allow rows and cells to grow, increase column width or padding, wrap naturally, and use a horizontally scrollable data region when a table genuinely needs two-dimensional layout. Keep its headers and controls usable. Do not solve overflow by shrinking text, clipping content, or relying on ellipses with no way to reveal the full value. [GOV.UK's table guidance](https://design-system.service.gov.uk/components/table/) recommends splitting dense data where feasible; [Carbon's table specifications](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/specifications) tie header and row sizing together.
5. Check actual foreground/background pairs in every state, including tinted status blocks and dark panels: target at least **4.5:1 for ordinary text**. Thin or small text can look weaker in practice even when a computed color passes; increase contrast, size, or weight as needed. Use the real surface color, not an assumed white background. See [W3C's contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum).
6. Inspect the finished interface at common desktop and mobile widths, 200% text enlargement, and user spacing overrides. For SVG charts, remember that `viewBox` scaling changes the apparent text size: measure on screen and allow the chart to scroll or reflow rather than scaling its labels to illegibility. Review each screen and state, not just the overview. A CSS parser or passing functionality test is not visual or contrast validation.

### Real design-system examples

- [GOV.UK](https://design-system.service.gov.uk/styles/type-scale/) uses 19px/25px body text, 16px/20px small body text, and 36px/40px large headings on wide screens; its recent update retains 16px and 19px on small screens. Its public-service context favors generous reading sizes.
- [IBM Carbon](https://www.carbondesignsystem.com/building-blocks/foundations/typography/style-strategies) separates compact task-focused styles from expressive reading and marketing styles, pairing body and heading styles with compatible line heights.
- [Atlassian](https://atlassian.design/foundations/typography/applying-typography) provides named styles for UI and long-form reading rather than treating one size as suitable everywhere. Its 12px minimum is a system-specific option, not a recommendation for primary content.
- [Apple](https://developer.apple.com/design/human-interface-guidelines/accessibility) recommends accommodating text enlargement and taking extra care with thin custom fonts. Its platform sizes are in points and should not be copied directly as web CSS pixels.

These are documented examples, not proof of a single best website or a universal scale. Review the rendered result with actual users and content.

## Choosing expressive heading fonts

A “professional” typeface is one that suits its content, audience and context; it does not have to be neutral. Do not assume a decorative face is inherently youthful or suitable for all young audiences. Treat mood descriptions as hypotheses to test, not fixed rules. Existing brand standards and explicit user choices take priority.

**Selection process**

1. Identify the job: dense app navigation and operational headings; a short marketing hero; an editorial feature; or a campaign, event or entertainment headline. Collect actual examples of the longest title, short title, numerals, punctuation and required languages.
2. Describe the desired voice in concrete terms (for example energetic and direct, calm and approachable, or elegant and editorial), and ask for references when the desired identity is unclear. Determine where personality can be concentrated without slowing routine tasks.
3. Pick a readable UI/body family first. Choose one heading family, or use the same family with a different weight. Compare two or three candidates using real content at actual sizes, desktop and mobile. Look at letter shapes, spacing, counters, apparent weight, line breaks and tone; do not pick by the name or a generic trend alone.
4. Assign expressive type to a small number of high-emphasis roles. Avoid display faces in navigation, inputs, errors, table labels, dense charts and long text. Use the text family for smaller section and card headings if the display face becomes hard to read.
5. Verify language and glyph coverage, genuine available weights, license and web use, performance, fallback appearance and wrapping. Test narrow screens, 200% zoom, user text spacing, light and dark surfaces, keyboard states, and representative content with real users when possible. WCAG normal text contrast is generally 4.5:1; large text has a 3:1 minimum, but higher contrast may be useful, especially for delicate strokes.

| Direction | Candidate heading faces | Useful situations and cautions | Body/UI pairing to try |
| --- | --- | --- | --- |
| Clear contemporary sans | Inter, Manrope, DM Sans | Product apps, dashboards and long titles; choose a face with clear small-size shapes and weights. A single family can provide enough hierarchy. | Same family, or Source Sans 3 |
| Geometric / upbeat | Outfit, Plus Jakarta Sans, Space Grotesk | Creative products and consumer brands where some personality is welcome. Check distinctive shapes, tight spacing and long names at small sizes. | Inter, DM Sans |
| Assertive display | Protest Strike, Anton, Bebas Neue | Short campaign, sports, music, streetwear or activist headlines where a loud voice is intentional. Use sparingly at large sizes; condensed or heavy letterforms and uppercase can make long headings harder to scan. Check each family's case and language coverage. | Inter, Source Sans 3, DM Sans |
| Editorial serif | Fraunces, DM Serif Display, Playfair Display | Magazine, culture, fashion or narrative brands; useful when an editorial tone fits. High-contrast strokes can disappear at small sizes or on low-contrast backgrounds. | Inter, DM Sans, Source Sans 3 |
| Warm humanist serif | Lora, Source Serif 4 | Education, publishing and content-led brands. A text-designed serif can also serve longer reading, but inspect the actual face and size. | Source Sans 3, Inter |
| Friendly rounded / playful | Nunito, Fredoka | Friendly consumer, family or creative identities; use the more playful faces selectively and test tone against the audience and subject. | Nunito Sans, DM Sans |
| Handwritten / script | Caveat, Dancing Script | A short accent for an explicitly personal or expressive identity; avoid long headlines, essential instructions, dense UI and all-caps settings. Check difficult letter combinations and translations. | Inter, Source Sans 3 |
| Technical / monospace | IBM Plex Mono, Space Mono | Code, technical identities and short data labels when character alignment or voice is useful. Do not assume monospace makes every table easier to read; check width and ambiguity. | IBM Plex Sans, Inter |

These are candidates, not guaranteed matches or a mandatory catalog. Preview actual fonts before choosing; check current family styles, coverage and licenses in the provider's specimen. When a face lacks a required script, choose a compatible fallback or a different family; avoid forcing synthetic bold or italic where a real style is unavailable. For variable fonts use supported axes, and enable optical sizing where provided.

**Protest Strike:** Octavio Pardo's Protest family draws on protest signage; Strike is a solid sans with a single regular style. Its heavy design is already visually bold even though its CSS weight is 400. Try it for a brief, high-impact hero or campaign headline, not a whole dashboard. For an actual example, [Haslett Public Schools](https://www.haslettschools.org/our-district/logo-and-style-guide/district-fonts) uses Protest Strike for major headings and Montserrat for general content; [Soapbox](https://www.soapbox.media/brand) reserves it for its wordmark and uses Geist Sans for interface and data. Their choices show different possible roles, not universal rules. See the [designer's family description](https://fonts.adobe.com/fonts/protest).

**Implementation defaults:** Start heading line-height near 1.15–1.25 for large display text and 1.2–1.35 for app titles, adjusting to the face and language. Use normal tracking first; only tighten large type after checking real words and avoid automatic tight tracking for scripts that need different shaping. Use one or two families where practical; select only needed styles and subsets, use font-display: swap where appropriate, choose a metric-compatible fallback, and test loaded and fallback states. Avoid faking weights on single-weight display fonts. Maintain semantic h1–h6 order independent of visual style. These are starting choices, not universal rules or WCAG font-size requirements.

Further reading: [Material 3 applying type](https://m3.material.io/styles/typography/applying-type), [Material type anatomy](https://m2.material.io/design/typography/understanding-typography.html), [GOV.UK heading hierarchy](https://design-system.service.gov.uk/styles/headings/), [Hoefler & Co. on optical sizes](https://www.typography.com/blog/introducing-surveyor), and [Hoefler & Co. web-font practices](https://dashboard.typography.com/user-guide/best-practices).

## Deterministic text-role roadmap

Use this procedure for every visible text element, including nested spans, buttons, badges, chart SVG labels and dynamically generated rows. The sizes below are our starting choices for typical web-app fonts at a 16 px root, not WCAG size requirements. First remove meaningless copy; do not make essential information smaller merely because it is secondary or sits at the edge of a card.

1. **Classify by meaning and task, not HTML tag or placement.** If the text is a user action, choose action. If it is an amount, status, identifier, date, table heading or value needed for a decision, choose key data. If it tells the user what to enter or how to fix an error, choose form/error. If it is ordinary explanatory text, choose body. If it names a page or section, choose the appropriate heading. Only genuinely supplementary context gets metadata. A number is key data even when its containing element is called small, badge or footer.
2. **Assign a role token:**

| Role | Default size / line-height | Weight | Color and behavior |
| --- | --- | --- | --- |
| Page heading | 28–36 / 34–43 px | 600–700 | Primary text; responsive for available width. |
| Section or card heading | 18–20 / 24–28 px | 600 | Primary text; use hierarchy rather than decorative microcopy. |
| Body and explanatory text | 16 / 24 px | 400 | Primary text; allow wrapping. Long-form reading can need larger type. |
| Actions, buttons and links | 14–16 / 20–24 px | 500–600 | Readable action color on the actual surface; secondary actions are still actions, not captions. |
| Key values, amounts, statuses, identifiers, table cells and headers | 14–16 / 20–24 px | 400–600 | Primary text or a tested semantic color; use tabular figures for columns where alignment helps. |
| Form labels and errors | 14–16 / 20–24 px | 400–600 | Error text identifies the problem in words and meets contrast on its actual background. |
| Necessary supporting metadata | 13–14 / 18–20 px | 400–500 | Use only for genuinely secondary context; retain readable contrast. For the compact sidebar requested in this project, 13 px labels are a specific desktop design choice, with 44 px touch rows. |

3. **Handle competing roles:** choose the more readable/larger role when text has multiple jobs. A transaction amount next to a merchant is key data; “View all” is an action; a timestamp is metadata only if it is not important to the task. Statuses that drive decisions are key data, not decoration. Increase emphasis through weight, color and spacing before making everything large; never rely on bold weight to compensate for tiny text.
4. **Handle long text and density:** retain the role size; wrap, increase the available width, stack the layout, or scroll a wide table. Avoid clipping, shrinking text to fit, or fixed-height containers that prevent growth. Check real content, translated strings, long amounts, signs and decimals.
5. **Verify the rendered result:** inspect computed styles on the text itself, not just its parent, on every view and interaction state. Test on actual backgrounds, including badges, charts, hover and dark surfaces; check WCAG contrast (normally 4.5:1 for standard text, 3:1 for qualifying large text) and do not round up a failing ratio. Confirm 200% text resize and WCAG text-spacing overrides without lost content or functionality. Re-test loaded fonts and fallbacks at narrow widths.
6. **Exceptions:** in a genuinely dense expert interface, a different size can be chosen after documenting the task, audience and reason and checking real use; prefer alternative layouts over reducing critical values. User needs, writing systems, actual typeface metrics and assistive settings can require larger sizes or line heights. These rules are a repeatable baseline, not a claim that one scale guarantees readability.

References: [Material 3 type roles](https://m3.material.io/styles/typography/applying-type), [Carbon productive typography](https://www.carbondesignsystem.com/building-blocks/foundations/typography/style-strategies), [GOV.UK type scale](https://design-system.service.gov.uk/styles/type-scale/), [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum), and [W3C resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text).

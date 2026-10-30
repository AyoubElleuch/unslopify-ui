# Design notes

These are working preferences for reviewing AI-generated interfaces. Apply them to the product and its audience; they are not a claim that one visual style suits every project.

## Typography and content

- Choose readable, well-proportioned fonts and a consistent type scale. Inter, Source Sans 3, IBM Plex Sans, and Manrope are options to compare, not mandatory defaults.
- Make headings, body text, labels, and data legible. Remove decorative microcopy, redundant labels, and filler; keep useful context and supporting text.
- Use the typography map in the README to select size, line height, weight, and color by role. Avoid tiny bold text, thin display text, and low-contrast secondary copy; test actual typefaces, surfaces, responsive layouts, text enlargement, and spacing overrides.
- Write direct, specific interface copy. Replace generic encouragement and slogans with information or an action.
- Audit page subtitles, eyebrow labels, dialog headers, captions, cards, and footers for generic filler. Remove redundant explanations and slogans outright rather than shrinking, restyling, or replacing them with similar copy. Keep task-relevant context, labels, errors, and user-provided content; a useful dialog title should remain clear and readable.

## Color and decoration

- Before choosing a palette, ask the user for a color if they have not supplied one. A primary color is preferred, but any reference color is useful; ask which role it should play instead of assuming. If the user has no preference, choose an appropriate starting color.
- Use the palette generator in `color/palette.js` to generate candidates from the supplied color. Preserve an explicitly chosen primary color and review the results in context. Color relationships are starting points, not proof of a best palette.
- Do not default to the green, olive, and beige combination seen in the original examples. The user may explicitly request it. A green input alone is not a request for that entire combination, and a specific color the user supplies must still be honored.
- Choose colors for the product; do not copy a reference's palette when the product has a different scheme.
- Use color deliberately and check contrast for actual text, controls, and states. Do not communicate information through color alone.
- Do not put colored dots or circles before or after text, including section labels, headings, status labels, navigation, or decorative punctuation. Remove them rather than restyling them. When a chart needs a legend, use an identifiable non-circular key such as a short line, with text and enough contrast; preserve its meaning. Avoid decorative colored strips on component edges.
- Do not add decorative icon tiles to cards or panels: avoid the repeated small icon inside a colored square or rounded background, including in card corners. Keep icons that communicate useful meaning or identify an action, without adding a background merely for decoration.

## Controls and interactions

- Give text inputs and placeholders enough padding from their borders.
- Replace browser-default validation pop-ups with clear, custom inline messages that fit the product. Identify the field and how to fix it; preserve keyboard focus, screen-reader announcements, required-field validation, and existing form behavior. Do not rely on color alone to signal an error.
- Put field-specific errors directly below the relevant control. Start with 4–8px between control and message, and 16–24px between the end of the message and the next field or group. Treat the control and message as one group; avoid doubled margins or grid gaps, and let the layout grow when errors wrap or clear.
- Use a temporary, smoothly animated notification for suitable non-field events, choosing a top, bottom, or side position that stays visible without covering important controls. Keep actionable, critical, or unresolved errors available until addressed or dismissed; never make a disappearing notification the only way to discover a form error. Respect reduced motion, provide accessible announcements, and avoid stealing focus.
- Design custom dropdowns and date pickers rather than leaving default browser controls, while preserving keyboard access, labeling, and focus states.
- Use consistent, recognizable custom SVG icons instead of emojis or mismatched text symbols.
- Choose icons deliberately: include them when they clarify an action or meaning, or when a considered visual benefit justifies them; omit repetitive decoration. Do not put a separate colored background, border, or tile behind an icon. A button or selected navigation row may still have its own functional background.
- Size icons to sit comfortably alongside the associated text: start near the text's font size or line height (typically 16–20px for 14–16px interface text), align them optically, and keep a consistent gap. Do not stretch an icon to match the height of a multiline text block. Preserve its aspect ratio and provide a sufficiently large target for icon-only controls.
- Choose an icon color from the product palette that contrasts clearly with its actual adjacent surface. Palette position alone cannot predict contrast: measure it. Essential graphical icons need at least 3:1 contrast against adjacent colors; aim higher where practical, especially for thin strokes. Test interactive states and themes. Give icon-only actions accessible names; hide decorative or text-redundant SVGs from assistive technology.
- Animate opening menus, dialogs, and other elements with brief, restrained transitions. Animate only what needs it and support reduced-motion settings.

## Sidebars

- Use the NovaStage screenshot as a reference for structure and styling, not as a color palette to copy.
- Choose sidebar colors that fit the website. Differentiate the sidebar, selected item, and main content with clear, subtle contrast.
- Show the active item with a restrained filled background rather than a colored edge stripe or decorative dot.
- Align compact outline icons and labels, group navigation logically, and keep secondary text subdued.
- Separate the brand and account areas with understated dividers. Remove unnecessary promotional blocks and captions.
- Keep a persistent desktop sidebar anchored to the viewport for the entire page scroll: its background must cover the full viewport height, with no empty strip below it. A sidebar that is merely `100vh` tall but scrolls away with the document does not meet this requirement. Use fixed or sticky positioning appropriate to the layout, and reserve its width in the main content.
- If sidebar content exceeds the available height, scroll it inside the sidebar without shifting the main layout or clipping navigation and account controls. Check long pages, short viewports, zoom, and mobile layouts; use an appropriate responsive navigation pattern on smaller screens.

## Product integrity

- Use the product's real tasks and content to guide the layout instead of reusing an interchangeable dashboard template.
- Make counts, dates, percentages, statuses, and charts consistent with their data. Label demo data and avoid implying that simulated actions are real.
- Check empty, loading, error, focus, responsive, and long-content states as well as the populated screen.


- Tables: every row must match its headings, including previews; preserve columns on narrow screens with horizontal scrolling. For paginated tables, reserve space for a full page so controls remain in place on shorter pages, while allowing growth for wrapping and zoom. Check empty, filtered, first, and last pages.


- Sidebar: keep useful navigation and account controls; remove redundant workspace/profile blocks, fake switchers and promotional or operational cards. Use the site’s own palette, readable compact menu text, roughly 36–40 px desktop rows and 44 px touch rows, restrained selected/hover states, clear keyboard focus, and viewport-height scrolling. See the README sidebar schema for decisions, exceptions and checks.

- Ember sidebar reference: compact brand row, optional functional search and collapse control, subtle divider, aligned outline icons and labels, quiet unselected rows, and a softly rounded filled active row. Optional counts and chevrons must be meaningful. Adapt colors to the product rather than copying black and gray.

- Standing workflow: whenever the design solutions change, apply the change to all three revised comparison websites as well, while leaving the original websites untouched.

- Sidebar search is optional: decide based on navigation complexity, search scope, user needs and existing controls; ask if its purpose is unclear. Do not duplicate contextual or global search. For compact desktop menus, start near 232–256 px wide with roughly 36–40 px rows and 13–14 px labels, then adjust to the actual content and readability; use larger touch targets where appropriate.

- Sidebar refinement: keep the logo header compact and place navigation close below it; omit a generic “Navigation” heading. Use compact, readable menu rows. Support two consistent hover/selected treatments: inset rounded fill or a fill spanning the full sidebar width. Keep larger touch targets and allow text to reflow.

- Sidebar menu items: no vertical margin or gap between adjacent rows; hover and selected backgrounds should meet without an empty strip.

- Disclosure indicators: no decorative or misleading text arrow glyphs. Use centered, consistent SVG chevrons only for real controls; synchronize rotation and accessible expanded state with the actual panel, honor reduced motion, and use labeled directional SVGs for previous/next controls.

- Heading fonts: choose by brand voice, actual content and role; expressive display fonts such as Protest Strike are options for short, prominent headings, not default UI/body fonts. Evaluate real text, language coverage, weights, contrast, fallbacks and responsive layouts. See the README selection table.

- Text-size decisions must follow the content role, including nested elements: action links and important amounts, statuses, dates, and identifiers are not tiny metadata. Apply the README role roadmap, then inspect actual computed sizes and contrast across views and states.

- Charts: fit the container responsively without clipped or tiny axes; keep labels, units and padding legible, avoid glows, provide useful restrained interactions and keyboard-accessible data equivalents, and use brief reduced-motion-aware transitions for load/change. Choose behavior for each chart type rather than adding decorative controls.

- Chart motion must animate the data marks meaningfully: bars grow from their baseline, lines reveal across the plot, and circular charts fill their true proportions. Keep axes still, motion brief and non-looping, and show the final result immediately for reduced motion.

- Chart QA: check the actual scaled SVG text, inherited SVG strokes, and class collisions with button styles. Keep axis labels regular and readable, control plot scale, and render legend samples as short line/dash swatches matching the series.

- Plot marks should fill the usable chart width without scaling labels into oversized text. Expandable sections should open with a short natural-height animation and a smoothly rotating right-to-down chevron; support keyboard operation and reduced motion throughout the site.

- Heading and sentence endings use ordinary punctuation or no punctuation; never add decorative stars, sparkles, suns or colored dots as punctuation. Preserve meaningful user content.

---
name: design-system-nique-webflow-html-website-template
description: >
  Apply the Nique - Webflow HTML website template design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for e-commerce interfaces.
---

# Nique - Webflow HTML website template — Design System Skill

## When to Use

- Building new UI components for Nique - Webflow HTML website template.
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for e-commerce pages.
- Checking designs against the extracted token set.

## Context

- **Product:** Nique - Webflow HTML website template — https://nique-template.webflow.io/menu
- **Surface:** e-commerce
- **Audience:** Consumers and shoppers
- **Character:** Product-focused shopping experience with a rich, diverse color palette and 3 typefaces.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| color-3 | `#F1F1F1` | Background |
| color-1 | `#343339` | Text Primary |
| color-2 | `#FACE8D` | Text Light |
| color-4 | `#FFFFFF` | Text Light |

### Typography

**Font stack:** Chillax, Bitter Rose, sans-serif

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 14px | Captions, metadata |
| text-sm | 16px | Labels, secondary text |
| text-base | 20px | Body text (default) |
| text-lg | 24px | Subheadings, emphasis |
| text-xl | 64px | Section headings |
| text-2xl | 80px | Section headings |

**Weight scale:** 400 · 500
**Line heights:** 80px · 28.8px · 25.6px · 72px · 14px · 57.6px

### Spacing

**Base unit:** 8px

`space-1: 1px` · `space-2: 8px` · `space-3: 10px` · `space-4: 12px` · `space-5: 16px` · `space-6: 20px` · `space-7: 24px` · `space-8: 40px` · `space-9: 48px` · `space-10: 64px` · `space-11: 128px`

### Shapes

**Border radius:** `radius-sm: 5px` · `radius-md: 10px` · `radius-lg: 16px` · `radius-xl: 500px`

### Elevation

_None detected._

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-base:** `color 0.2s`
- **duration-base:** `background-color 0.3s`
- **duration-base:** `border-color 0.3s`

## Component Inventory

- **Buttons:** 4 detected
- **Links:** 32 detected
- **Navigation:** 1 elements
- **Forms:** 1 detected
- **Images:** 32 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 8px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (5px, 10px, 16px, 500px).
- Do not stack more than one primary CTA per viewport.
- Do not use red for non-error UI — reserve it for destructive actions and warnings.
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Persuasive, benefit-driven, trustworthy. Active voice, urgency without pressure.

## Authoring Workflow

When creating or documenting a component for this system:

1. State intent — one sentence on purpose.
2. Map tokens — list every token the component uses.
3. Define anatomy — named parts with token assignments.
4. Specify states — default, hover, focus-visible, active, disabled, loading, error, empty.
5. Describe interactions — keyboard, pointer, touch, edge cases.
6. Add a11y criteria — testable pass/fail checks.
7. List anti-patterns — concrete misuse examples.
8. Close with the Definition of Done checklist.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behavior
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle edge cases: empty, overflow, truncation, max content.
- Include keyboard navigation behavior.
- Document ARIA roles and labels.

## Definition of Done

- Default state renders (smoke test).
- All states visually verified.
- Zero hardcoded visual values — tokens only.
- Keyboard navigation works without pointer.
- No critical a11y violations.
- Tested at min and max breakpoint.
- At least one anti-pattern documented.
- Purpose, usage, and limitations documented.

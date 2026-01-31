---
name: advanced-theme-customization
description: Using CSS variables and utility classes for custom component theming
---

# Theme Customization

## Imports

```scss
// Sass import (in styles.scss or theme file)
@use '@angular/material' as mat;

// Include to enable utility classes
// @include mat.system-classes();
```

Angular Material provides CSS variables and utility classes for theming custom components to match the application's Material Design theme.

## CSS Variables Approach

Use `--mat-sys-*` variables directly in component styles:

```scss
.my-banner {
  background: var(--mat-sys-primary-container);
  color: var(--mat-sys-on-primary-container);
  border: 1px solid var(--mat-sys-outline-variant);
  font: var(--mat-sys-body-large);
}
```

## Utility Classes Approach

Enable utility classes in your theme:

```scss
@use '@angular/material' as mat;

html {
  @include mat.theme((...));
  @include mat.system-classes();
}
```

Use classes in templates:

```html
<div class="mat-bg-primary-container mat-text-on-primary-container mat-border-variant mat-font-body-lg">
  Important announcement
</div>
```

## Color System Tokens

### Primary Colors

| Variable | Description |
|----------|-------------|
| `--mat-sys-primary` | Primary color for key elements |
| `--mat-sys-on-primary` | Text/icons on primary background |
| `--mat-sys-primary-container` | Container with primary emphasis |
| `--mat-sys-on-primary-container` | Text/icons on primary container |

### Secondary Colors

| Variable | Description |
|----------|-------------|
| `--mat-sys-secondary` | Secondary accent color |
| `--mat-sys-on-secondary` | Text/icons on secondary |
| `--mat-sys-secondary-container` | Less prominent containers |
| `--mat-sys-on-secondary-container` | Text/icons on secondary container |

### Tertiary Colors

| Variable | Description |
|----------|-------------|
| `--mat-sys-tertiary` | Third accent color |
| `--mat-sys-tertiary-container` | Tertiary containers |

### Error Colors

| Variable | Description |
|----------|-------------|
| `--mat-sys-error` | Error state color |
| `--mat-sys-on-error` | Text/icons on error |
| `--mat-sys-error-container` | Error container |
| `--mat-sys-on-error-container` | Text on error container |

### Surface Colors

| Variable | Description |
|----------|-------------|
| `--mat-sys-surface` | Default surface background |
| `--mat-sys-on-surface` | Text on surface |
| `--mat-sys-surface-variant` | Alternate surface |
| `--mat-sys-surface-container` | Container on surface |
| `--mat-sys-surface-container-high` | Higher emphasis container |
| `--mat-sys-surface-container-highest` | Highest emphasis container |
| `--mat-sys-surface-container-low` | Lower emphasis container |
| `--mat-sys-surface-container-lowest` | Lowest emphasis container |
| `--mat-sys-inverse-surface` | Inverted surface (snackbars) |
| `--mat-sys-inverse-on-surface` | Text on inverted surface |

### Outline Colors

| Variable | Description |
|----------|-------------|
| `--mat-sys-outline` | Borders and dividers |
| `--mat-sys-outline-variant` | Subtle borders |

## Typography System Tokens

### Hierarchy

| Category | Sizes | Usage |
|----------|-------|-------|
| `display` | sm, md, lg | Hero text |
| `headline` | sm, md, lg | Page/section titles |
| `title` | sm, md, lg | Component titles |
| `body` | sm, md, lg | Body text |
| `label` | sm, md, lg | Button/chip labels |

### Usage

```scss
.my-title {
  font: var(--mat-sys-headline-medium);
  letter-spacing: var(--mat-sys-headline-medium-tracking);
}

.my-body {
  font: var(--mat-sys-body-large);
  letter-spacing: var(--mat-sys-body-large-tracking);
}
```

### Utility Classes

```html
<h1 class="mat-font-headline-lg">Page Title</h1>
<p class="mat-font-body-md">Content text</p>
<span class="mat-font-label-lg">Button Label</span>
```

## Shape System Tokens

| Variable | Value | Usage |
|----------|-------|-------|
| `--mat-sys-corner-extra-small` | 4px | Chips, snackbars |
| `--mat-sys-corner-small` | 8px | Text fields |
| `--mat-sys-corner-medium` | 12px | Cards |
| `--mat-sys-corner-large` | 16px | FABs, datepickers |
| `--mat-sys-corner-extra-large` | 28px | Dialogs |
| `--mat-sys-corner-full` | 9999px | Pills, avatars |

```scss
.my-card {
  border-radius: var(--mat-sys-corner-medium);
}
```

## Elevation System Tokens

```scss
.my-card {
  box-shadow: var(--mat-sys-level1);  // Subtle elevation
}

.my-menu {
  box-shadow: var(--mat-sys-level2);  // Menus, selects
}

.my-fab {
  box-shadow: var(--mat-sys-level3);  // FABs
}
```

## Disabled State

```scss
.my-disabled-element {
  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent);
  color: color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent);
}
```

## Light/Dark Mode Support

CSS variables automatically support light/dark when using `color-scheme`:

```scss
html {
  color-scheme: light dark;  // Automatic mode switching
  @include mat.theme((...));
}
```

Custom components using these variables will automatically adapt.

## Material Design 2 Compatibility

If using M2 theme config, enable system tokens:

```scss
@use '@angular/material' as mat;

$theme: mat.m2-define-light-theme((...));

html {
  @include mat.core-theme($theme);
  @include mat.button-theme($theme);
  // ...
  @include mat.m2-theme($theme);       // Enable CSS variables
  @include mat.system-classes();       // Enable utility classes
}
```

Then use CSS variables instead of Sass map extraction:

```scss
// Old M2 approach (avoid)
.widget {
  background-color: mat.m2-get-color-from-palette($background, card);
}

// New approach (preferred)
.widget {
  background-color: var(--mat-sys-surface);
}
```

## Practical Example

Custom alert component:

```scss
.my-alert {
  padding: 16px;
  border-radius: var(--mat-sys-corner-medium);
  font: var(--mat-sys-body-medium);
  
  &.info {
    background: var(--mat-sys-primary-container);
    color: var(--mat-sys-on-primary-container);
  }
  
  &.warning {
    background: var(--mat-sys-tertiary-container);
    color: var(--mat-sys-on-tertiary-container);
  }
  
  &.error {
    background: var(--mat-sys-error-container);
    color: var(--mat-sys-on-error-container);
  }
}
```

Or with utility classes:

```html
<div class="my-alert mat-bg-error-container mat-text-on-error-container mat-corner-md mat-font-body-md">
  Error message
</div>
```

## Key Points

- Use CSS variables for styles that should match the theme
- Variables are `light-dark()` aware - no separate light/dark styles needed
- Utility classes simplify template-based theming
- Prefer CSS variables over extracting values from Sass theme maps
- All components use these same tokens for consistency
- Works with both M3 and M2 (with `mat.m2-theme()`)

<!--
Source references:
- https://github.com/angular/components/blob/main/guides/theming-your-components.md
- https://material.angular.dev/guide/theming-your-components
-->

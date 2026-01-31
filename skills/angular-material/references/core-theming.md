---
name: core-theming
description: Angular Material M3 theming system with color palettes, typography, density, and CSS variables
---

# Theming

## Imports

```scss
// Sass import (in styles.scss or theme file)
@use '@angular/material' as mat;
```

Angular Material v19+ uses a Material Design 3 (M3) theming system based on CSS variables and design tokens.

## Basic Theme Setup

Create a Sass theme file that includes the `mat.theme` mixin:

```scss
@use '@angular/material' as mat;

html {
  color-scheme: light dark;  // Enables automatic light/dark mode
  @include mat.theme((
    color: mat.$violet-palette,
    typography: Roboto,
    density: 0
  ));
}

body {
  background: var(--mat-sys-surface);
  color: var(--mat-sys-on-surface);
}
```

## Color Configuration

### Single Palette (Simplest)

Uses one palette for primary, secondary, and tertiary colors:

```scss
@include mat.theme((
  color: mat.$violet-palette,
  typography: Roboto,
  density: 0
));
```

### Color Map (Advanced)

Configure primary and tertiary separately with explicit theme-type:

```scss
@include mat.theme((
  color: (
    primary: mat.$violet-palette,
    tertiary: mat.$orange-palette,
    theme-type: light,  // 'light', 'dark', or 'color-scheme'
  ),
  typography: Roboto,
  density: 0
));
```

### Prebuilt Palettes

- `$red-palette`, `$green-palette`, `$blue-palette`, `$yellow-palette`
- `$cyan-palette`, `$magenta-palette`, `$orange-palette`, `$chartreuse-palette`
- `$spring-green-palette`, `$azure-palette`, `$violet-palette`, `$rose-palette`

### Custom Palette Generation

```bash
ng generate @angular/material:theme-color
```

## Typography Configuration

### Single Font Family

```scss
@include mat.theme((
  color: mat.$violet-palette,
  typography: Roboto,
  density: 0
));
```

### Typography Map

```scss
@include mat.theme((
  color: mat.$violet-palette,
  typography: (
    plain-family: Roboto,
    brand-family: 'Open Sans',
    bold-weight: 900,
    medium-weight: 500,
    regular-weight: 300,
  ),
  density: 0
));
```

## Density

Values from `0` (default) to `-5` (most compact). Each step reduces affected sizes by 4px:

```scss
@include mat.theme((
  color: mat.$violet-palette,
  typography: Roboto,
  density: -2  // Compact layout
));
```

## Light/Dark Mode

### Automatic (System Preference)

```scss
html {
  color-scheme: light dark;  // Respects user's system preference
  @include mat.theme((
    color: mat.$violet-palette,
    typography: Roboto,
    density: 0
  ));
}
```

### Class-Based Toggle

```scss
html {
  color-scheme: light;
  @include mat.theme((
    color: mat.$violet-palette,
    typography: Roboto,
    density: 0
  ));
}

body.dark-mode {
  color-scheme: dark;
}
```

## Multiple Themes

Apply different themes to specific containers:

```scss
html {
  @include mat.theme((
    color: mat.$violet-palette,
    typography: Roboto,
    density: 0
  ));
}

.danger-zone {
  @include mat.theme((
    color: mat.$red-palette,
  ));
}
```

## Token Overrides

### System Tokens

```scss
html {
  @include mat.theme((
    color: mat.$violet-palette,
    typography: Roboto,
    density: 0
  ));

  @include mat.theme-overrides((
    primary-container: #84ffff
  ));
}
```

Or inline with theme:

```scss
@include mat.theme((
  color: mat.$violet-palette,
  typography: Roboto,
  density: 0
), $overrides: (
  primary-container: orange,
));
```

### Component Tokens

Each component has an `overrides` mixin:

```scss
html {
  @include mat.card-overrides((
    elevated-container-color: red,
    elevated-container-shape: 32px,
    title-text-size: 2rem,
  ));
}
```

## Utility Classes

Enable utility classes for template usage:

```scss
html {
  @include mat.theme((...));
  @include mat.system-classes();
}
```

```html
<body class="mat-bg-surface mat-text-on-surface">
  <div class="mat-bg-primary-container mat-text-on-primary-container">
    Highlighted content
  </div>
</body>
```

## Strong Focus Indicators

For WCAG compliance with visible focus outlines:

```scss
html {
  @include mat.theme((...));
  @include mat.strong-focus-indicators();
}
```

Customize the indicator:

```scss
@include mat.strong-focus-indicators((
  border-color: red,
  border-style: dotted,
  border-width: 4px,
  border-radius: 2px,
));
```

## Key Points

- Theme output is CSS variables (design tokens) prefixed with `--mat-sys`
- Colors use `light-dark()` CSS function for automatic mode switching
- `mat.theme` only outputs variables for categories you specify
- Avoid direct CSS overrides; use the `overrides` API for customization
- Shadow DOM requires loading theme styles in each shadow root

<!--
Source references:
- https://github.com/angular/components/blob/main/guides/theming.md
- https://material.angular.dev/guide/theming
-->

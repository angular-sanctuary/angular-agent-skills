---
name: component-buttons
description: Material Design buttons including text, filled, FAB, and icon buttons
---

# Buttons

## Imports

```ts
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// Optional: Global configuration
import { MAT_BUTTON_CONFIG } from '@angular/material/button';
```

Angular Material buttons are native `<button>` or `<a>` elements enhanced with Material Design styling.

## Button Variants

| Attribute | Description |
|-----------|-------------|
| `matButton` | Rectangular button for text and icons |
| `matIconButton` | Circular button for icons only |
| `matFab` | Floating action button with elevation |
| `matMiniFab` | Smaller FAB variant |

## Button Appearances

Set via the `matButton` attribute value:

```html
<button matButton>Text (Default)</button>
<button matButton="filled">Filled</button>
<button matButton="tonal">Tonal</button>
<button matButton="outlined">Outlined</button>
<button matButton="elevated">Elevated</button>
```

| Appearance | Use Case |
|------------|----------|
| `text` | Lowest priority actions, multiple options |
| `filled` | High-emphasis, final actions (save, confirm) |
| `tonal` | Medium-emphasis, similar to filled but less prominent |
| `outlined` | Medium-emphasis, needs attention but not primary |
| `elevated` | Visual separation from patterned backgrounds |

## Icon Buttons

```html
<button matIconButton aria-label="Settings">
  <mat-icon>settings</mat-icon>
</button>
```

## Floating Action Buttons (FAB)

```html
<button matFab aria-label="Add item">
  <mat-icon>add</mat-icon>
</button>

<button matMiniFab aria-label="Edit">
  <mat-icon>edit</mat-icon>
</button>
```

### Extended FAB

```html
<button matFab extended>
  <mat-icon>home</mat-icon>
  Home
</button>
```

## Link Buttons

Use `<a>` for navigation:

```html
<a matButton href="/dashboard">Dashboard</a>
<a matButton="filled" routerLink="/settings">Settings</a>
```

## Disabled State

```html
<button matButton disabled>Disabled</button>
```

### Interactive Disabled

Allow focus and events while appearing disabled:

```html
<button matButton [disabledInteractive]="true" aria-disabled="true">
  Cannot Submit (hover for tooltip)
</button>
```

Global configuration:

```ts
@NgModule({
  providers: [
    {provide: MAT_BUTTON_CONFIG, useValue: {disabledInteractive: true}}
  ]
})
```

## Button Toggle

For stateful toggle buttons, use `mat-button-toggle`:

```html
<mat-button-toggle-group [(value)]="alignment">
  <mat-button-toggle value="left">
    <mat-icon>format_align_left</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="center">
    <mat-icon>format_align_center</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="right">
    <mat-icon>format_align_right</mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>
```

### Multiple Selection

```html
<mat-button-toggle-group multiple [(value)]="formats">
  <mat-button-toggle value="bold">Bold</mat-button-toggle>
  <mat-button-toggle value="italic">Italic</mat-button-toggle>
</mat-button-toggle-group>
```

## Accessibility

- Use `<button>` for actions, `<a>` for navigation
- Always add `aria-label` to icon-only buttons
- Avoid ALL CAPS text (causes screen reader issues)
- Ensure 48x48px minimum touch target for icon buttons

```html
<button matIconButton aria-label="Delete item">
  <mat-icon>delete</mat-icon>
</button>
```

## Key Points

- Buttons enhance native elements, preserving accessibility
- Choose appearance based on action importance hierarchy
- Use FAB for primary floating actions
- Extended FAB adds text label alongside icon
- `disabledInteractive` enables tooltips on disabled buttons
- Button toggles work with `@angular/forms` (ngModel, formControl)

<!--
Source references:
- https://github.com/angular/components/blob/main/src/material/button/button.md
- https://material.angular.dev/components/button/overview
-->

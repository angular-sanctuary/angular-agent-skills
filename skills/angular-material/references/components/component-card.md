---
name: component-card
description: Content containers for text, images, and actions
---

# Card

## Imports

```ts
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; // For action buttons
```

Content container for grouping related information.

## Basic Structure

```html
<mat-card>
  <mat-card-header>
    <mat-card-title>Card Title</mat-card-title>
    <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
  </mat-card-header>
  <mat-card-content>
    <p>Card content goes here...</p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>ACTION</button>
  </mat-card-actions>
</mat-card>
```

## Card Sections

| Element | Description |
|---------|-------------|
| `<mat-card-header>` | Top section with padding |
| `<mat-card-content>` | Primary content with padding |
| `<mat-card-actions>` | Button container at bottom |
| `<mat-card-footer>` | Bottom section |
| `<img mat-card-image>` | Full-width image |

## Header Elements

```html
<mat-card-header>
  <img mat-card-avatar src="avatar.jpg" alt="User avatar">
  <mat-card-title>John Doe</mat-card-title>
  <mat-card-subtitle>Software Engineer</mat-card-subtitle>
</mat-card-header>
```

## Images

```html
<mat-card>
  <img mat-card-image src="cover.jpg" alt="Cover image">
  <mat-card-content>
    <p>Image stretches to full container width</p>
  </mat-card-content>
</mat-card>
```

## Title Group

Combine title, subtitle, and image:

```html
<mat-card-header>
  <mat-card-title-group>
    <mat-card-title>Article Title</mat-card-title>
    <mat-card-subtitle>Published yesterday</mat-card-subtitle>
    <img mat-card-sm-image src="thumb.jpg" alt="Thumbnail">
  </mat-card-title-group>
</mat-card-header>
```

Image sizes in title group:
- `mat-card-sm-image` - Small
- `mat-card-md-image` - Medium
- `mat-card-lg-image` - Large

## Actions Alignment

```html
<mat-card-actions align="start">
  <button mat-button>LEFT</button>
</mat-card-actions>

<mat-card-actions align="end">
  <button mat-button>RIGHT</button>
</mat-card-actions>
```

## Complete Example

```html
<mat-card>
  <mat-card-header>
    <img mat-card-avatar src="avatar.jpg" alt="Author">
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  
  <img mat-card-image src="shiba.jpg" alt="Photo of a Shiba Inu">
  
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original 
      spitz breeds of dog from Japan.
    </p>
  </mat-card-content>
  
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>
```

## Card Variants

### Outlined Card

```html
<mat-card appearance="outlined">
  <mat-card-content>Outlined card style</mat-card-content>
</mat-card>
```

### Elevated Card

```html
<mat-card appearance="raised">
  <mat-card-content>Raised card with shadow</mat-card-content>
</mat-card>
```

## Clickable Cards

```html
<mat-card tabindex="0" (click)="onCardClick()" (keydown.enter)="onCardClick()">
  <mat-card-content>Click or press Enter to select</mat-card-content>
</mat-card>
```

## Accessibility

Apply appropriate roles based on usage:

```html
<!-- Decorative grouping -->
<mat-card>...</mat-card>

<!-- Meaningful grouping -->
<mat-card role="group">...</mat-card>

<!-- Landmark region -->
<mat-card role="region" aria-label="User profile">...</mat-card>

<!-- Interactive card -->
<mat-card tabindex="0" role="button" aria-label="Select this item">
  ...
</mat-card>
```

## Styling

Cards don't add padding by default. Use sections for standard padding:

```html
<!-- No padding -->
<mat-card>
  <p>Content touches edges</p>
</mat-card>

<!-- With padding -->
<mat-card>
  <mat-card-content>
    <p>Content has standard padding</p>
  </mat-card-content>
</mat-card>
```

## Key Points

- `mat-card` is a content container without built-in behavior
- Use `mat-card-content` for standard padding
- `mat-card-image` stretches to full width
- `mat-card-avatar` for circular header images
- Actions align with `align="start"` or `align="end"`
- Add `role` and `tabindex` for interactive cards

<!--
Source references:
- https://github.com/angular/components/blob/main/src/material/card/card.md
- https://material.angular.dev/components/card/overview
-->

---
name: core-schematics
description: Angular CLI schematics for scaffolding Material components and generating themes
---

# Schematics

Angular Material provides CLI schematics for project setup and component scaffolding.

## Installation

### Install Angular Material

```bash
ng add @angular/material
```

This schematic:
- Adds `@angular/material` and `@angular/cdk` to `package.json`
- Configures a prebuilt or custom theme
- Adds Roboto fonts to `index.html`
- Adds Material Icon font to `index.html`
- Adds global styles (body margin removal, height setup)

### Install CDK Only

```bash
ng add @angular/cdk
```

## Component Schematics

### Address Form

Generates a form with Material form fields, radio buttons, and buttons:

```bash
ng generate @angular/material:address-form <component-name>
```

### Navigation

Creates a responsive sidenav with toolbar:

```bash
ng generate @angular/material:navigation <component-name>
```

### Dashboard

Generates a grid layout with Material cards and menus:

```bash
ng generate @angular/material:dashboard <component-name>
```

### Table

Creates a data table with sorting and pagination pre-configured:

```bash
ng generate @angular/material:table <component-name>
```

### Tree

Generates an interactive tree structure using `<mat-tree>`:

```bash
ng generate @angular/material:tree <component-name>
```

### Drag and Drop (CDK)

Creates a drag-and-drop component using CDK directives:

```bash
ng generate @angular/cdk:drag-drop <component-name>
```

## Theme Generation

### Material 3 Theme Color Schematic

Generate custom M3 color palettes from a base color:

```bash
ng generate @angular/material:theme-color
```

This interactive schematic:
- Prompts for primary color input
- Optionally accepts secondary, tertiary, and neutral colors
- Generates a file with M3 palettes
- Can generate high contrast color override mixins

## Key Points

- All schematics require `@angular/material` or `@angular/cdk` to be installed
- Component schematics create standalone components by default
- Generated components follow Material Design patterns
- Use the theme-color schematic to create brand-specific color schemes

<!--
Source references:
- https://github.com/angular/components/blob/main/guides/schematics.md
- https://material.angular.dev/guide/schematics
-->

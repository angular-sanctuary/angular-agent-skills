---
name: cdk-menu
description: CDK directives for building accessible custom menus and menu bars
---

# CDK Menu

## Imports

```ts
import { CdkMenuModule } from '@angular/cdk/menu';
import { 
  CdkMenu, 
  CdkMenuBar, 
  CdkMenuItem, 
  CdkMenuGroup,
  CdkMenuItemCheckbox, 
  CdkMenuItemRadio,
  CdkMenuTrigger,
  CdkContextMenuTrigger
} from '@angular/cdk/menu';
```

Accessible menu system following WAI ARIA patterns.

## Basic Pop-up Menu

```html
<button [cdkMenuTriggerFor]="menu">Open Menu</button>

<ng-template #menu>
  <div cdkMenu>
    <button cdkMenuItem>Cut</button>
    <button cdkMenuItem>Copy</button>
    <button cdkMenuItem>Paste</button>
  </div>
</ng-template>
```

## Menu Bar

Desktop-style menu bar:

```html
<div cdkMenuBar>
  <button cdkMenuItem [cdkMenuTriggerFor]="fileMenu">File</button>
  <button cdkMenuItem [cdkMenuTriggerFor]="editMenu">Edit</button>
  <button cdkMenuItem [cdkMenuTriggerFor]="viewMenu">View</button>
</div>

<ng-template #fileMenu>
  <div cdkMenu>
    <button cdkMenuItem>New</button>
    <button cdkMenuItem>Open</button>
    <button cdkMenuItem>Save</button>
  </div>
</ng-template>
```

## Inline Menu

Persistent menu on page:

```html
<div cdkMenu>
  <button cdkMenuItem (cdkMenuItemTriggered)="undo()">Undo</button>
  <button cdkMenuItem (cdkMenuItemTriggered)="redo()">Redo</button>
</div>
```

## Context Menu

Right-click triggered menu:

```html
<div [cdkContextMenuTriggerFor]="contextMenu" class="context-area">
  Right-click here
</div>

<ng-template #contextMenu>
  <div cdkMenu>
    <button cdkMenuItem>Cut</button>
    <button cdkMenuItem>Copy</button>
    <button cdkMenuItem>Paste</button>
  </div>
</ng-template>
```

### Nested Context Menus

```html
<div [cdkContextMenuTriggerFor]="outerMenu">
  Outer area
  <div [cdkContextMenuTriggerFor]="innerMenu">
    Inner area
  </div>
</div>
```

## Submenus

```html
<ng-template #fileMenu>
  <div cdkMenu>
    <button cdkMenuItem>New</button>
    <button cdkMenuItem [cdkMenuTriggerFor]="recentMenu">
      Open Recent
    </button>
    <button cdkMenuItem>Save</button>
  </div>
</ng-template>

<ng-template #recentMenu>
  <div cdkMenu>
    <button cdkMenuItem>Document 1</button>
    <button cdkMenuItem>Document 2</button>
  </div>
</ng-template>
```

## Checkbox Items

```html
<ng-template #viewMenu>
  <div cdkMenu>
    <button cdkMenuItemCheckbox 
            [cdkMenuItemChecked]="showToolbar"
            (cdkMenuItemTriggered)="showToolbar = !showToolbar">
      Show Toolbar
    </button>
    <button cdkMenuItemCheckbox 
            [cdkMenuItemChecked]="showSidebar"
            (cdkMenuItemTriggered)="showSidebar = !showSidebar">
      Show Sidebar
    </button>
  </div>
</ng-template>
```

## Radio Items

```html
<ng-template #sizeMenu>
  <div cdkMenu>
    <div cdkMenuGroup>
      <button cdkMenuItemRadio 
              [cdkMenuItemChecked]="size === 'small'"
              (cdkMenuItemTriggered)="size = 'small'">
        Small
      </button>
      <button cdkMenuItemRadio 
              [cdkMenuItemChecked]="size === 'medium'"
              (cdkMenuItemTriggered)="size = 'medium'">
        Medium
      </button>
      <button cdkMenuItemRadio 
              [cdkMenuItemChecked]="size === 'large'"
              (cdkMenuItemTriggered)="size = 'large'">
        Large
      </button>
    </div>
  </div>
</ng-template>
```

## Menu Groups

Separate radio groups within same menu:

```html
<div cdkMenu>
  <div cdkMenuGroup>
    <button cdkMenuItemRadio>Option A1</button>
    <button cdkMenuItemRadio>Option A2</button>
  </div>
  <hr>
  <div cdkMenuGroup>
    <button cdkMenuItemRadio>Option B1</button>
    <button cdkMenuItemRadio>Option B2</button>
  </div>
</div>
```

## Smart Menu Aim

Prevents accidental submenu close when moving toward it:

```html
<div cdkMenu cdkTargetMenuAim>
  <button cdkMenuItem [cdkMenuTriggerFor]="submenu">
    Hover for submenu
  </button>
</div>
```

## Menu Item Actions

```html
<button cdkMenuItem (cdkMenuItemTriggered)="doAction()">
  Action Item
</button>
```

## Disabled Items

```html
<button cdkMenuItem [cdkMenuItemDisabled]="true">
  Disabled Item
</button>
```

## ARIA Roles

| Directive | Role |
|-----------|------|
| `cdkMenuBar` | `menubar` |
| `cdkMenu` | `menu` |
| `cdkMenuGroup` | `group` |
| `cdkMenuItem` | `menuitem` |
| `cdkMenuItemRadio` | `menuitemradio` |
| `cdkMenuItemCheckbox` | `menuitemcheckbox` |
| `cdkMenuTrigger` | `button` |

## CSS Classes

| Directive | Class | When |
|-----------|-------|------|
| `cdkMenu` | `.cdk-menu` | Always |
| `cdkMenu` | `.cdk-menu-inline` | Inline menu |
| `cdkMenuBar` | `.cdk-menu-bar` | Always |
| `cdkMenuItem` | `.cdk-menu-item` | Always |
| `cdkMenuItemCheckbox` | `.cdk-menu-item-checkbox` | Always |
| `cdkMenuItemRadio` | `.cdk-menu-item-radio` | Always |
| `cdkMenuTriggerFor` | `.cdk-menu-trigger` | Always |

## Keyboard Interaction

| Key | Action |
|-----|--------|
| `↓` | Next item / Open submenu |
| `↑` | Previous item |
| `→` | Open submenu / Next top-level item |
| `←` | Close submenu / Previous top-level item |
| `Enter` / `Space` | Activate item |
| `Escape` | Close current menu |
| `Home` | First item |
| `End` | Last item |

## Styling Example

```scss
.cdk-menu {
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  padding: 4px 0;
  min-width: 160px;
}

.cdk-menu-bar {
  display: flex;
  background: #f5f5f5;
  padding: 0 8px;
}

.cdk-menu-item {
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;

  &:hover, &:focus {
    background: #e3f2fd;
  }

  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.cdk-menu-item-checkbox,
.cdk-menu-item-radio {
  &[aria-checked="true"]::before {
    content: '✓';
    margin-right: 8px;
  }
}
```

## Complete Example

```html
<div cdkMenuBar>
  <button cdkMenuItem [cdkMenuTriggerFor]="fileMenu">File</button>
  <button cdkMenuItem [cdkMenuTriggerFor]="editMenu">Edit</button>
</div>

<ng-template #fileMenu>
  <div cdkMenu cdkTargetMenuAim>
    <button cdkMenuItem (cdkMenuItemTriggered)="newFile()">New</button>
    <button cdkMenuItem [cdkMenuTriggerFor]="recentMenu">Recent</button>
    <hr>
    <button cdkMenuItem (cdkMenuItemTriggered)="save()">Save</button>
    <button cdkMenuItem [cdkMenuItemDisabled]="!canSaveAs">Save As...</button>
  </div>
</ng-template>

<ng-template #editMenu>
  <div cdkMenu>
    <button cdkMenuItem (cdkMenuItemTriggered)="undo()">Undo</button>
    <button cdkMenuItem (cdkMenuItemTriggered)="redo()">Redo</button>
    <hr>
    <button cdkMenuItemCheckbox 
            [cdkMenuItemChecked]="wordWrap"
            (cdkMenuItemTriggered)="wordWrap = !wordWrap">
      Word Wrap
    </button>
  </div>
</ng-template>
```

## Key Points

- `cdkMenuTriggerFor` connects triggers to menu templates
- `cdkMenu` for pop-up menus, `cdkMenuBar` for menu bars
- `cdkMenuItem` for basic items
- `cdkMenuItemCheckbox` / `cdkMenuItemRadio` for stateful items
- `cdkMenuGroup` separates radio groups
- `cdkContextMenuTriggerFor` for right-click menus
- `cdkTargetMenuAim` enables smart submenu handling
- Full keyboard navigation and ARIA support
- No styling included - fully customizable

<!--
Source references:
- https://github.com/angular/components/blob/main/src/cdk/menu/menu.md
- https://material.angular.dev/cdk/menu/overview
-->

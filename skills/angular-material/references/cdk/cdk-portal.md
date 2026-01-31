---
name: cdk-portal
description: CDK portal system for rendering dynamic content in different locations
---

# CDK Portal

## Imports

```ts
import { PortalModule, CdkPortal, CdkPortalOutlet } from '@angular/cdk/portal';
import { ComponentPortal, TemplatePortal, DomPortal } from '@angular/cdk/portal';
import { DomPortalOutlet, PortalOutlet, Portal } from '@angular/cdk/portal';
```

Portals provide a way to render dynamic UI content to a designated "outlet" anywhere in the application.

## Concepts

- **Portal**: A piece of UI (Component, TemplateRef, or DOM element) to render
- **PortalOutlet**: A slot where the portal content gets rendered

## Portal Types

### TemplatePortal (from ng-template)

Using the directive:

```html
<ng-template cdkPortal>
  <p>This content can be moved around</p>
</ng-template>

<!-- Shorthand syntax -->
<p *cdkPortal>This content can be moved around</p>
```

Access via ViewChild:

```ts
@ViewChild(CdkPortal) templatePortal: CdkPortal;
```

Programmatic creation:

```ts
@ViewChild('templateContent') templateContent: TemplateRef<unknown>;

ngAfterViewInit() {
  this.templatePortal = new TemplatePortal(
    this.templateContent,
    this.viewContainerRef
  );
}
```

### ComponentPortal

Create a portal from a component class:

```ts
import {ComponentPortal} from '@angular/cdk/portal';

ngAfterViewInit() {
  this.userSettingsPortal = new ComponentPortal(UserSettingsComponent);
}
```

With injector for dependency injection:

```ts
const injector = Injector.create({
  providers: [{provide: MY_DATA, useValue: someData}],
  parent: this.injector
});

this.portal = new ComponentPortal(MyComponent, null, injector);
```

### DomPortal

Move existing DOM content (note: Angular bindings won't update after move):

```html
<div #domContent>Some content here</div>
```

```ts
@ViewChild('domContent') domContent: ElementRef<HTMLElement>;

ngAfterViewInit() {
  this.domPortal = new DomPortal(this.domContent);
}
```

## Portal Outlet

### CdkPortalOutlet Directive

Render portals in templates:

```html
<ng-template [cdkPortalOutlet]="activePortal"></ng-template>
```

```ts
activePortal: Portal<any>;

showSettings() {
  this.activePortal = this.userSettingsPortal;
}
```

### Programmatic Outlet

```ts
import {DomPortalOutlet} from '@angular/cdk/portal';

const outlet = new DomPortalOutlet(
  this.containerElement,
  this.componentFactoryResolver,
  this.appRef,
  this.injector
);

outlet.attach(myPortal);
```

## Portal API

| Method | Description |
|--------|-------------|
| `attach(outlet)` | Attach portal to an outlet |
| `detach()` | Detach from current outlet |
| `isAttached` | Check if attached |

## PortalOutlet API

| Method | Description |
|--------|-------------|
| `attach(portal)` | Attach a portal |
| `detach()` | Detach current portal |
| `dispose()` | Permanently dispose |
| `hasAttached` | Check if has content |

## Practical Example

Tab panel with dynamic content:

```ts
@Component({
  template: `
    <button (click)="showTab1()">Tab 1</button>
    <button (click)="showTab2()">Tab 2</button>
    
    <div class="tab-content">
      <ng-template [cdkPortalOutlet]="activeTab"></ng-template>
    </div>
    
    <ng-template cdkPortal #tab1>Tab 1 content</ng-template>
    <ng-template cdkPortal #tab2>Tab 2 content</ng-template>
  `
})
export class TabsComponent {
  @ViewChild('tab1', {read: CdkPortal}) tab1Portal: CdkPortal;
  @ViewChild('tab2', {read: CdkPortal}) tab2Portal: CdkPortal;
  
  activeTab: Portal<any>;
  
  showTab1() { this.activeTab = this.tab1Portal; }
  showTab2() { this.activeTab = this.tab2Portal; }
}
```

## Key Points

- Portals are used internally by overlays, dialogs, menus, etc.
- `TemplatePortal` preserves Angular context (bindings, directives)
- `ComponentPortal` creates fresh component instances
- `DomPortal` moves DOM as-is; Angular features won't update after move
- A portal can only be attached to one outlet at a time
- Always detach or dispose outlets when no longer needed

<!--
Source references:
- https://github.com/angular/components/blob/main/src/cdk/portal/portal.md
- https://material.angular.dev/cdk/portal/overview
-->

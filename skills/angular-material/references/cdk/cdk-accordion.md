---
name: cdk-accordion
description: Foundation for building custom accordion components
---

# CDK Accordion

## Imports

```ts
import { CdkAccordionModule, CdkAccordion, CdkAccordionItem } from '@angular/cdk/accordion';
```

Base classes for building custom accordion/expansion panel components.

## Basic Structure

```ts
import { CdkAccordion, CdkAccordionItem } from '@angular/cdk/accordion';

@Component({
  selector: 'my-accordion',
  template: `
    <div cdkAccordion [multi]="multi()">
      <ng-content></ng-content>
    </div>
  `
})
export class MyAccordion {
  multi = input<boolean>(false);
}

@Component({
  selector: 'my-accordion-item',
  template: `
    <div 
      class="header"
      role="button"
      [attr.aria-expanded]="expanded"
      [attr.aria-controls]="contentId"
      (click)="toggle()">
      <ng-content select="[header]"></ng-content>
    </div>
    @if (expanded()) {
    <div 
      class="content"
      [id]="contentId"
      role="region"
      [attr.aria-labelledby]="headerId"
    >
      <ng-content></ng-content>
    </div>
    }
  `
})
export class MyAccordionItem extends CdkAccordionItem {
  headerId = `accordion-header-${this.id}`;
  contentId = `accordion-content-${this.id}`;
}
```

## Usage

```html
<my-accordion>
  <my-accordion-item>
    <div header>Section 1</div>
    <p>Content for section 1</p>
  </my-accordion-item>
  
  <my-accordion-item>
    <div header>Section 2</div>
    <p>Content for section 2</p>
  </my-accordion-item>
  
  <my-accordion-item>
    <div header>Section 3</div>
    <p>Content for section 3</p>
  </my-accordion-item>
</my-accordion>
```

## Multi-Expand Mode

Allow multiple panels open simultaneously:

```html
<my-accordion [multi]="true">
  <!-- Multiple panels can be open at once -->
</my-accordion>
```

Default behavior (multi=false) closes other panels when one opens.

## CdkAccordion API

```ts
@Directive({
  selector: 'cdk-accordion, [cdkAccordion]'
})
class CdkAccordion {
  // Allow multiple panels open at once
  multi = input<boolean>(false);

  // Open all panels
  openAll(): void;

  // Close all panels
  closeAll(): void;
}
```

## CdkAccordionItem API

```ts
@Directive({
  selector: 'cdk-accordion-item, [cdkAccordionItem]'
})
class CdkAccordionItem {
  // Unique ID
  readonly id: string;

  // Current state
  expanded = input<boolean>(false);
  disabled = input<boolean>(false);

  // Events
  opened = output<void>();
  closed = output<void>();
  expandedChange = output<boolean>();
  destroyed = output<void>();

  // Methods
  open(): void;
  close(): void;
  toggle(): void;
}
```

## Programmatic Control

```ts
@Component({...})
export class MyComponent {
  accordion = viewChild.required<CdkAccordion>(CdkAccordion);
  items = viewChildren<CdkAccordionItem>(CdkAccordionItem);

  expandAll(): void {
    this.accordion().openAll();
  }

  collapseAll(): void {
    this.accordion().closeAll();
  }

  expandFirst(): void {
    this.items().first?.open();
  }
}
```

## Event Handling

```html
<my-accordion-item
  (opened)="onOpened()"
  (closed)="onClosed()"
  (expandedChange)="onExpandedChange($event)">
</my-accordion-item>
```

```ts
onOpened(): void {
  console.log('Panel opened');
}

onClosed(): void {
  console.log('Panel closed');
}

onExpandedChange(expanded: boolean): void {
  console.log('Expanded state:', expanded);
}
```

## Disabled State

```html
<my-accordion-item [disabled]="true">
  <div header>Disabled Section</div>
  <p>This panel cannot be toggled</p>
</my-accordion-item>
```

## Complete Implementation

```ts
@Component({
  selector: 'custom-accordion',
  template: `
    <div 
      class="accordion" 
      cdkAccordion 
      [multi]="multi()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .accordion {
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  `]
})
export class CustomAccordion {
  multi = input<boolean>(false);
}

@Component({
  selector: 'custom-accordion-item',
  template: `
    <div class="item" [class.expanded]="expanded" [class.disabled]="disabled">
      <button
        class="header"
        type="button"
        role="button"
        [id]="headerId"
        [attr.aria-expanded]="expanded"
        [attr.aria-controls]="contentId"
        [disabled]="disabled"
        (click)="toggle()">
        <span class="title"><ng-content select="[title]"></ng-content></span>
        <span class="icon">{{ expanded ? '▲' : '▼' }}</span>
      </button>
      
      <div
        class="content"
        role="region"
        [id]="contentId"
        [attr.aria-labelledby]="headerId"
        [@expansion]="expanded ? 'expanded' : 'collapsed'">
        @if (expanded()) {
        <div class="content-inner">
          <ng-content></ng-content>
        </div>
        }
      </div>
    </div>
  `,
  animations: [
    trigger('expansion', [
      state('collapsed', style({ height: '0', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', animate('200ms ease-in-out'))
    ])
  ],
  styles: [`
    .header {
      width: 100%;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      background: #f5f5f5;
      border: none;
      cursor: pointer;
    }
    .header:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .content {
      overflow: hidden;
    }
    .content-inner {
      padding: 16px;
    }
  `]
})
export class CustomAccordionItem extends CdkAccordionItem {
  headerId = `header-${this.id}`;
  contentId = `content-${this.id}`;
}
```

## Accessibility

Recommended ARIA pattern:

```html
<!-- Header button -->
<button
  role="button"
  aria-expanded="true/false"
  aria-controls="content-id">
  Header Text
</button>

<!-- Content region -->
<div
  role="region"
  aria-labelledby="header-id">
  Content
</div>
```

## Key Points

- `CdkAccordion` manages group of expandable items
- `CdkAccordionItem` individual expandable panel
- `multi` input allows multiple panels open
- Extend `CdkAccordionItem` for custom implementations
- Built-in `open()`, `close()`, `toggle()` methods
- `openAll()`, `closeAll()` on accordion
- Add ARIA attributes manually for accessibility
- No styling included - fully customizable

<!--
Source references:
- https://github.com/angular/components/blob/main/src/cdk/accordion/accordion.md
- https://material.angular.dev/cdk/accordion/overview
-->

---
name: core-harnesses
description: Component test harnesses for reliable, maintainable Angular Material testing
---

# Component Test Harnesses

## Imports

```ts
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

// Component-specific harnesses
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatSelectHarness } from '@angular/material/select/testing';
import { MatInputHarness } from '@angular/material/input/testing';
// ... other harnesses from @angular/material/{component}/testing
```

Angular Material provides test harnesses that let tests interact with components via a stable API, insulating tests from internal DOM changes.

## Setup

```ts
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

let loader: HarnessLoader;

describe('my-component', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({imports: [MyModule], declarations: [UserProfile]});
    fixture = TestBed.createComponent(UserProfile);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });
});
```

## Loading Harnesses

### Get Single Harness

```ts
import {MatButtonHarness} from '@angular/material/button/testing';

it('should work', async () => {
  const button = await loader.getHarness(MatButtonHarness);
  await button.click();
});
```

### Get All Harnesses

```ts
const buttons = await loader.getAllHarnesses(MatButtonHarness);
```

### Filter with Predicates

Each harness has a static `with` method for filtering:

```ts
// By selector
const info = await loader.getHarness(MatButtonHarness.with({selector: '#more-info'}));

// By text content
const cancel = await loader.getHarness(MatButtonHarness.with({text: 'Cancel'}));

// By multiple criteria with regex
const okButton = await loader.getHarness(
  MatButtonHarness.with({selector: '.confirm', text: /^(Ok|Okay)$/})
);
```

### Scoped Loading

Load harnesses from a specific DOM subtree:

```ts
const footerLoader = await loader.getChildLoader('.footer');
const footerButton = await footerLoader.getHarness(MatButtonHarness);
```

## Common Filter Options

All harnesses support:
- `selector`: CSS selector the component must match
- `ancestor`: CSS selector for an ancestor element

Component-specific options vary (e.g., `text` for buttons).

## Interacting with Components

Harnesses expose methods that mirror user interactions:

```ts
it('should confirm when ok clicked', async () => {
  const okButton = await loader.getHarness(MatButtonHarness.with({selector: '.confirm'}));
  
  // Check state
  expect(await okButton.isDisabled()).toBe(false);
  
  // Perform action
  await okButton.click();
  
  // Verify result
  expect(fixture.componentInstance.confirmed).toBe(true);
});
```

## Complex Component Example (MatSelect)

```ts
import {MatSelectHarness} from '@angular/material/select/testing';

it('should select bug option', async () => {
  const select = await loader.getHarness(MatSelectHarness);
  await select.open();
  const bugOption = await select.getOption({text: 'Bug'});
  await bugOption.click();
});
```

## Environment Support

- **Unit tests**: `@angular/cdk/testing/testbed` with `TestbedHarnessEnvironment`
- **E2E tests**: `@angular/cdk/testing/selenium-webdriver` with `SeleniumWebDriverHarnessEnvironment`
- **Custom environments**: Extend `HarnessEnvironment` and `TestElement`

## Key Points

- All harness APIs are async and return Promises - use `async`/`await`
- No need to call `fixture.detectChanges()` - harnesses handle change detection
- Harnesses wait for stability automatically (setTimeout, Promise, etc.)
- Tests using harnesses survive internal DOM structure changes
- Use `with()` predicates to target specific component instances
- Available harnesses: `Mat{Component}Harness` from `@angular/material/{component}/testing`

<!--
Source references:
- https://github.com/angular/components/blob/main/guides/using-component-harnesses.md
- https://material.angular.dev/guide/using-component-harnesses
-->

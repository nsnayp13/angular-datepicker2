# Angular Datepicker2

Modern Angular datepicker component with standalone support. Compatible with Angular 16+. Date range picker, multiple dates, customizable templates. Lightweight, no extra dependencies.

## Features

- ✅ **Standalone Components** – Angular 16+ standalone ready
- ✅ **Selection Modes** – Single, multiple dates, or date ranges
- ✅ **Customizable** – Template support for custom day rendering
- ✅ **Modern Angular** – Signals-friendly, OnPush, ES2022 builds
- ✅ **TypeScript** – Strict typings for all APIs
- ✅ **No Extra Deps** – Only peer deps: `@angular/core` and `@angular/common`

## Installation

```bash
npm install @nsnayp/angular-datepicker2
```

## Demo

[https://nsnayp13.github.io/angular-datepicker2/](https://nsnayp13.github.io/angular-datepicker2/)

## Quick Start

### Standalone Component (Angular 16+)

```typescript
import { Component } from '@angular/core';
import { AngularDatepicker2 } from '@nsnayp/angular-datepicker2';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [AngularDatepicker2],
  template: `
    <angular-datepicker2 
      [(selectedDates)]="selectedDates"
      [selectMode]="'single'"
      (onDayClick)="onDayClick($event)">
    </angular-datepicker2>
  `
})
export class ExampleComponent {
  selectedDates: Date[] = [];
  
  onDayClick(day: any) {
    console.log('Day clicked:', day);
  }
}
```

### Module-based (Angular 16+)

```typescript
import { NgModule } from '@angular/core';
import { AngularDatepicker2 } from '@nsnayp/angular-datepicker2';

@NgModule({
  imports: [AngularDatepicker2],
})
export class YourModule { }
```

## API Reference

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `selectedDates` | `Date[]` | `[]` | Array of selected dates |
| `selectMode` | `'single' \| 'multiple' \| 'period'` | `'single'` | Selection mode |
| `shownDate` | `Date` | `new Date()` | Date to display initially |
| `viewMode` | `ViewMode \| number` | `1` | Number of months to show |
| `weekStart` | `number` | `0` | First day of week (0 = Sunday) |
| `weekends` | `number[]` | `[0, 6]` | Weekend days |
| `disabledDates` | `DisabledDates` | - | Disabled dates configuration |
| `suggest` | `Suggest[]` | - | Predefined date suggestions |
| `days` | `Day[]` | - | Custom day definitions |
| `vertical` | `boolean` | `false` | Vertical alignment of days |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `selectedDatesChange` | `Date[]` | Emitted when selection changes |
| `onDayClick` | `Day` | Emitted when a day is clicked |

## Examples

### Date Range Selection

```typescript
@Component({
  template: `
    <angular-datepicker2 
      [(selectedDates)]="dateRange"
      [selectMode]="'period'">
    </angular-datepicker2>
  `
})
export class DateRangeExample {
  dateRange: Date[] = [];
}
```

### Custom Day Templates

```typescript
import { DayDirective } from '@nsnayp/angular-datepicker2';

@Component({
  standalone: true,
  imports: [AngularDatepicker2, DayDirective],
  template: `
    <angular-datepicker2 [(selectedDates)]="selectedDates">
      <div *ad2day="let date from customDate" [attr.title]="'Custom day'">
        {{date.getDate()}}
        <div class="points">
          <div class="point blue"></div>
          <div class="point green"></div>
        </div>
      </div>
    </angular-datepicker2>
  `
})
export class CustomTemplateExample {
  selectedDates: Date[] = [];
  customDate = new Date(2024, 3, 15);
}
```

### With Suggestions

```typescript
import { SelectMode } from '@nsnayp/angular-datepicker2';

@Component({
  template: `
    <angular-datepicker2 
      [(selectedDates)]="selectedDates"
      [suggest]="suggestions">
    </angular-datepicker2>
  `
})
export class SuggestionsExample {
  selectedDates: Date[] = [];
  
  suggestions = [
    {
      title: 'Last two weeks',
      selectMode: SelectMode.Period,
      selectedDates: [
        new Date(2024, 3, 1), 
        new Date(2024, 3, 14)
      ],
    },
    {
      title: 'Specific dates',
      selectMode: SelectMode.Multiple,
      selectedDates: [
        new Date(2024, 3, 1),
        new Date(2024, 3, 15),
        new Date(2024, 3, 30),
      ],
    }
  ];
}
```

## Interfaces

### SelectMode
```typescript
enum SelectMode {
  Single = 'single',
  Multiple = 'multiple', 
  Period = 'period'
}
```

### ViewMode
```typescript
enum ViewMode {
  Quarter = 'quarter',
  Semester = 'semester'
}
```

### DisabledDates
```typescript
interface DisabledDates {
  dates?: Date[];
  after?: Date;
  before?: Date;
}
```

## Utilities

The library exports `DateUtils` class with helpful date manipulation methods:

```typescript
import { DateUtils } from '@nsnayp/angular-datepicker2';

// Add/subtract days
const tomorrow = DateUtils.adjustDate(new Date(), 1);

// Add/subtract months
const nextMonth = DateUtils.adjustMonth(new Date(), 1);

// Get formatted date string
const dateString = DateUtils.getYmd(new Date());
```

## i18n

Set `registerLocaleData(locale, 'locale')` in your app. See [Angular i18n guide](https://angular.io/api/common/registerLocaleData)

## Supported versions

- Angular: 16–19 (peer deps `@angular/common` and `@angular/core` >= 16)
- TypeScript: 5.x
- Targets: ES2022 modules, modern browsers

> Built and tested with Angular 19.2. Backwards compatible to Angular 16 via peer ranges.

## Migration from v3.x

The library now uses standalone components by default:

```typescript
// Before (v3.x)
import { AngularDatepicker2Module } from '@nsnayp/angular-datepicker2';

// After (v4.x)
import { AngularDatepicker2 } from '@nsnayp/angular-datepicker2';
```

## SEO

**Description:** Modern Angular datepicker/calendar with date range, multiple selection, and customizable templates. Standalone-ready for Angular 16+.

**Keywords:** angular datepicker, angular calendar, angular 16 datepicker, angular 17, angular 18, angular 19, date range picker, standalone components, multiple dates, period picker, ui component

## License

MIT
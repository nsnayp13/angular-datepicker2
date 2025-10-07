# Angular Datepicker2

Modern Angular datepicker component with standalone support. Compatible with Angular 16+.

![Node.js CI](https://github.com/nsnayp13/angular-datepicker2/workflows/Node.js%20CI/badge.svg)

## Features

- ✅ **Standalone Components** - Works with Angular 16+ standalone components
- ✅ **Multiple Selection Modes** - Single, multiple dates, or date ranges
- ✅ **Fully Customizable** - Template support for custom day rendering
- ✅ **Modern Angular** - Built with latest Angular features
- ✅ **TypeScript** - Full TypeScript support
- ✅ **No Dependencies** - Only requires @angular/core and @angular/common

## Installation

```bash
npm install angular-datepicker2
```

## Demo

[https://nsnayp13.github.io/angular-datepicker2/](https://nsnayp13.github.io/angular-datepicker2/)

## Usage

### Standalone Component (Angular 16+)

```typescript
import { Component } from '@angular/core';
import { AngularDatepicker2 } from 'angular-datepicker2';

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
import { AngularDatepicker2 } from 'angular-datepicker2';

@NgModule({
  imports: [AngularDatepicker2],
  // ...
})
export class YourModule { }
```

## API

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

### Multiple Date Selection

```typescript
@Component({
  template: `
    <angular-datepicker2 
      [(selectedDates)]="multipleDates"
      [selectMode]="'multiple'">
    </angular-datepicker2>
  `
})
export class MultipleDatesExample {
  multipleDates: Date[] = [];
}
```

### Custom Day Templates

```html
<angular-datepicker2 [(selectedDates)]="selectedDates">
  <div *day="let date from customDate" [attr.title]="'Custom day'">
    {{date.getDate()}}
    <div class="points">
      <div class="point blue"></div>
      <div class="point green"></div>
    </div>
  </div>
</angular-datepicker2>
```

### With Suggestions

```typescript
export class SuggestionsExample {
  selectedDates: Date[] = [];
  
  suggest = [
    {
      title: "Last two weeks",
      selectMode: SelectMode.Period,
      selectedDates: [new Date(2024, 3, 1), new Date(2024, 3, 14)],
    },
    {
      title: "Last month",
      selectMode: SelectMode.Period,
      selectedDates: [new Date(2024, 3, 1), new Date(2024, 3, 30)],
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

## i18n

Set `registerLocaleData(locale, "locale")` in your app. See [Angular i18n guide](https://angular.io/api/common/registerLocaleData)

## Compatibility

- Angular 16+
- TypeScript 4.9+
- Modern browsers (ES2022+)

## Migration from v3.x

The library now uses standalone components by default. For module-based apps, simply import the component directly:

```typescript
// Before (v3.x)
import { AngularDatepicker2Module } from 'angular-datepicker2';

// After (v4.x)
import { AngularDatepicker2 } from 'angular-datepicker2';
```

## License

MIT
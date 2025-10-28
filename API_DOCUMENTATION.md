# Angular Datepicker 2 - Comprehensive API Documentation

## Table of Contents
1. [Overview](#overview)
2. [Installation & Setup](#installation--setup)
3. [Module Configuration](#module-configuration)
4. [Main Component API](#main-component-api)
5. [Directives](#directives)
6. [Interfaces & Types](#interfaces--types)
7. [Enums](#enums)
8. [Usage Examples](#usage-examples)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)

## Overview

Angular Datepicker 2 is a powerful, flexible date picker component for Angular applications. It supports multiple selection modes, custom day templates, internationalization, and extensive customization options.

**Version:** 3.4.3  
**Angular Compatibility:** ^8.2.14  
**License:** MIT

## Installation & Setup

### Installation
```bash
npm install angular-datepicker2
```

### Basic Setup
```typescript
// app.module.ts
import { AngularDatepicker2Module } from 'angular-datepicker2';

@NgModule({
  imports: [
    AngularDatepicker2Module.forRoot()
  ],
  // ... other module configuration
})
export class AppModule { }
```

### Internationalization Setup
```typescript
// app.module.ts
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEn, 'en');
registerLocaleData(localeEs, 'es');
```

## Module Configuration

### AngularDatepicker2Module

The main module that provides the datepicker functionality.

#### Methods

##### `forRoot(): ModuleWithProviders<AngularDatepicker2Module>`
Returns a module configuration for root-level imports.

**Returns:** `ModuleWithProviders<AngularDatepicker2Module>`

**Usage:**
```typescript
@NgModule({
  imports: [
    AngularDatepicker2Module.forRoot()
  ]
})
export class AppModule { }
```

## Main Component API

### AngularDatepicker2

The main datepicker component selector: `<angular-datepicker2>`

#### Input Properties

##### `selectedDates: Date[]`
- **Type:** `Date[]`
- **Default:** `[]`
- **Description:** Array of currently selected dates. Supports two-way data binding.
- **Example:**
```typescript
selectedDates = [new Date(2024, 0, 15), new Date(2024, 0, 20)];
```

##### `suggest: Suggest[]`
- **Type:** `Suggest[]`
- **Default:** `undefined`
- **Description:** Array of predefined date suggestions for quick selection.
- **Example:**
```typescript
suggest = [
  {
    title: "Last Week",
    selectMode: SelectMode.Period,
    selectedDates: [new Date(2024, 0, 1), new Date(2024, 0, 7)]
  }
];
```

##### `days: Day[]`
- **Type:** `Day[]`
- **Default:** `undefined`
- **Description:** Array of custom day definitions for styling and behavior.
- **Example:**
```typescript
days = [
  {
    isDisabled: false,
    isWeekEnd: true,
    isSelected: false,
    isHovered: false,
    date: new Date(2024, 0, 15)
  }
];
```

##### `shownDate: Date`
- **Type:** `Date`
- **Default:** `new Date()`
- **Description:** The date that determines which month/year is initially displayed.
- **Example:**
```typescript
shownDate = new Date(2024, 2, 15); // Shows March 2024
```

##### `vertical: boolean`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Controls the alignment of days in a week. When true, days are arranged vertically.
- **Example:**
```typescript
vertical = true; // Vertical day layout
```

##### `viewMode: ViewMode | number`
- **Type:** `ViewMode | number`
- **Default:** `1`
- **Description:** Controls how many months are displayed. Can be a number or ViewMode enum value.
- **Example:**
```typescript
viewMode = ViewMode.Quarter; // Shows 3 months
viewMode = 2; // Shows 2 months
```

##### `weekStart: number`
- **Type:** `number`
- **Default:** `0`
- **Description:** Defines which day the week starts on (0 = Sunday, 1 = Monday, etc.).
- **Example:**
```typescript
weekStart = 1; // Week starts on Monday
```

##### `weekends: number[]`
- **Type:** `number[]`
- **Default:** `[0, 6]`
- **Description:** Array of day numbers that should be treated as weekends.
- **Example:**
```typescript
weekends = [0, 6]; // Sunday and Saturday are weekends
weekends = [5, 6]; // Friday and Saturday are weekends
```

##### `selectMode: SelectMode`
- **Type:** `SelectMode`
- **Default:** `SelectMode.Single`
- **Description:** Defines the selection behavior of the datepicker.
- **Example:**
```typescript
selectMode = SelectMode.Multiple; // Allow multiple date selection
```

##### `nowDate: Date`
- **Type:** `Date`
- **Default:** `undefined`
- **Description:** The date to be considered as "today" for highlighting.
- **Example:**
```typescript
nowDate = new Date(2024, 0, 15); // January 15, 2024 is "today"
```

##### `disabledDates: DisabledDates`
- **Type:** `DisabledDates`
- **Default:** `undefined`
- **Description:** Configuration for disabling specific dates or date ranges.
- **Example:**
```typescript
disabledDates = {
  dates: [new Date(2024, 0, 1)], // Disable specific dates
  before: new Date(2024, 0, 1), // Disable dates before this
  after: new Date(2024, 11, 31) // Disable dates after this
};
```

#### Output Events

##### `selectedDatesChange: EventEmitter<Date[]>`
- **Type:** `EventEmitter<Date[]>`
- **Description:** Emitted when the selected dates change. Supports two-way data binding.
- **Example:**
```typescript
onSelectedDatesChange(dates: Date[]) {
  console.log('Selected dates changed:', dates);
}
```

##### `onDayClick: EventEmitter<Day>`
- **Type:** `EventEmitter<Day>`
- **Description:** Emitted when a day is clicked, providing the day object before state changes.
- **Example:**
```typescript
onDayClick(day: Day) {
  console.log('Day clicked:', day.date);
}
```

#### Public Methods

##### `getCalendar(): Date[]`
- **Returns:** `Date[]`
- **Description:** Returns the current calendar data (array of dates being displayed).
- **Example:**
```typescript
const calendar = this.datepicker.getCalendar();
```

##### `getViewSelectorMode(): string`
- **Returns:** `string`
- **Description:** Returns the current view mode ('days' or 'months').
- **Example:**
```typescript
const mode = this.datepicker.getViewSelectorMode();
```

##### `calculate(): Date[]`
- **Returns:** `Date[]`
- **Description:** Calculates and returns the months to be displayed based on current configuration.
- **Example:**
```typescript
const months = this.datepicker.calculate();
```

##### `goNext(): void`
- **Description:** Navigates to the next month(s) in the calendar.
- **Example:**
```typescript
this.datepicker.goNext();
```

##### `goPrev(): void`
- **Description:** Navigates to the previous month(s) in the calendar.
- **Example:**
```typescript
this.datepicker.goPrev();
```

##### `clickSuggest(suggest: Suggest): void`
- **Parameters:** `suggest: Suggest` - The suggestion object to apply
- **Description:** Applies a predefined date suggestion.
- **Example:**
```typescript
this.datepicker.clickSuggest(this.suggestions[0]);
```

## Directives

### DayDirective

The `DayDirective` allows you to create custom templates for individual days in the calendar.

#### Selector
`[ad2day]`

#### Input Properties

##### `date: Date`
- **Type:** `Date`
- **Description:** The date this directive should be applied to.
- **Usage:** `*ad2day="let date from someDate"`

#### Usage Examples

##### Basic Custom Day Template
```html
<angular-datepicker2 [(selectedDates)]="selectedDates">
  <div *ad2day="let date from customDate" class="custom-day">
    {{ date.getDate() }}
    <div class="custom-indicator"></div>
  </div>
</angular-datepicker2>
```

##### Multiple Custom Days with ngFor
```html
<angular-datepicker2 [(selectedDates)]="selectedDates">
  <ng-container *ngFor="let dateItem of specialDates">
    <div *ad2day="let date from dateItem" class="special-day">
      {{ date.getDate() }}
      <span class="badge">Special</span>
    </div>
  </ng-container>
</angular-datepicker2>
```

##### Conditional Custom Templates
```html
<angular-datepicker2 [(selectedDates)]="selectedDates">
  <div *ad2day="let date from holidayDate" 
       class="holiday-day"
       [class.highlight]="isHoliday(date)">
    {{ date.getDate() }}
    <i class="holiday-icon">🎉</i>
  </div>
</angular-datepicker2>
```

## Interfaces & Types

### Day
Represents a single day in the calendar.

```typescript
interface Day {
  isDisabled: boolean;    // Whether the day is disabled for selection
  isWeekEnd: boolean;     // Whether the day is a weekend
  isSelected: boolean;    // Whether the day is currently selected
  isHovered: boolean;     // Whether the day is being hovered
  isInPeriod?: boolean;   // Whether the day is within a selected period
  date?: Date;           // The actual date object
}
```

**Usage Example:**
```typescript
const customDay: Day = {
  isDisabled: false,
  isWeekEnd: true,
  isSelected: false,
  isHovered: false,
  isInPeriod: false,
  date: new Date(2024, 0, 15)
};
```

### Suggest
Represents a predefined date suggestion.

```typescript
interface Suggest {
  selectMode: SelectMode;  // The selection mode for this suggestion
  selectedDates: Date[];   // The dates to select when suggestion is clicked
  title: string;          // Display title for the suggestion
}
```

**Usage Example:**
```typescript
const suggestion: Suggest = {
  selectMode: SelectMode.Period,
  selectedDates: [
    new Date(2024, 0, 1),
    new Date(2024, 0, 31)
  ],
  title: "January 2024"
};
```

### Week
Represents a week in the calendar.

```typescript
interface Week {
  id: number;           // Unique identifier for the week
  days: Day[] | null;   // Array of days in this week
}
```

### Month
Represents a month in the calendar.

```typescript
interface Month {
  id: number;             // Unique identifier for the month
  date: Date;            // The date representing this month
  weeks: Week[] | null;  // Array of weeks in this month
}
```

### Calendar
Represents the entire calendar structure.

```typescript
interface Calendar {
  id?: number;           // Optional unique identifier
  months?: Month[] | null; // Array of months in the calendar
}
```

### DisabledDates
Configuration for disabling dates.

```typescript
interface DisabledDates {
  dates?: Date[];  // Specific dates to disable
  before?: Date;   // Disable all dates before this date
  after?: Date;    // Disable all dates after this date
}
```

**Usage Examples:**
```typescript
// Disable specific dates
const disabledDates1: DisabledDates = {
  dates: [
    new Date(2024, 0, 1),  // New Year's Day
    new Date(2024, 6, 4)   // Independence Day
  ]
};

// Disable date range
const disabledDates2: DisabledDates = {
  before: new Date(2024, 0, 1),  // Disable before 2024
  after: new Date(2024, 11, 31)  // Disable after 2024
};

// Combined approach
const disabledDates3: DisabledDates = {
  dates: [new Date(2024, 0, 1)],
  before: new Date(2023, 11, 31),
  after: new Date(2024, 11, 31)
};
```

## Enums

### SelectMode
Defines the selection behavior of the datepicker.

```typescript
enum SelectMode {
  Single = "single",     // Select only one date
  Multiple = "multiple", // Select multiple individual dates
  Period = "period"      // Select a date range/period
}
```

**Usage Examples:**
```typescript
// Single date selection
selectMode = SelectMode.Single;

// Multiple date selection
selectMode = SelectMode.Multiple;

// Date range selection
selectMode = SelectMode.Period;
```

### ViewMode
Defines how many months are displayed.

```typescript
enum ViewMode {
  Year = "year",         // Display 12 months (full year)
  Quarter = "quarter",   // Display 3 months (quarter)
  Semester = "semester"  // Display 6 months (semester)
}
```

**Usage Examples:**
```typescript
// Show a quarter (3 months)
viewMode = ViewMode.Quarter;

// Show a semester (6 months)
viewMode = ViewMode.Semester;

// Show full year (12 months)
viewMode = ViewMode.Year;

// Or use a number for custom count
viewMode = 2; // Show 2 months
```

## Usage Examples

### Basic Single Date Selection
```typescript
// component.ts
export class MyComponent {
  selectedDate: Date[] = [];
  shownDate = new Date();
  selectMode = SelectMode.Single;
}
```

```html
<!-- component.html -->
<angular-datepicker2
  [(selectedDates)]="selectedDate"
  [shownDate]="shownDate"
  [selectMode]="selectMode">
</angular-datepicker2>
```

### Multiple Date Selection with Custom Days
```typescript
// component.ts
export class MyComponent {
  selectedDates: Date[] = [];
  customDays: Day[] = [];
  selectMode = SelectMode.Multiple;
  
  ngOnInit() {
    // Mark specific days as special
    this.customDays = [
      {
        isDisabled: false,
        isWeekEnd: false,
        isSelected: false,
        isHovered: false,
        date: new Date(2024, 0, 15)
      }
    ];
  }
}
```

```html
<!-- component.html -->
<angular-datepicker2
  [(selectedDates)]="selectedDates"
  [days]="customDays"
  [selectMode]="selectMode">
  
  <div *ad2day="let date from customDays[0].date" 
       class="special-day">
    {{ date.getDate() }}
    <span class="badge">Special</span>
  </div>
</angular-datepicker2>
```

### Date Range Selection with Suggestions
```typescript
// component.ts
export class MyComponent {
  selectedDates: Date[] = [];
  selectMode = SelectMode.Period;
  suggestions: Suggest[] = [
    {
      title: "Last Week",
      selectMode: SelectMode.Period,
      selectedDates: [
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        new Date()
      ]
    },
    {
      title: "This Month",
      selectMode: SelectMode.Period,
      selectedDates: [
        new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
      ]
    }
  ];
  
  onDateRangeChange(dates: Date[]) {
    console.log('Date range selected:', dates);
  }
}
```

```html
<!-- component.html -->
<angular-datepicker2
  [(selectedDates)]="selectedDates"
  [selectMode]="selectMode"
  [suggest]="suggestions"
  (selectedDatesChange)="onDateRangeChange($event)">
</angular-datepicker2>
```

### Quarter View with Disabled Dates
```typescript
// component.ts
export class MyComponent {
  selectedDates: Date[] = [];
  viewMode = ViewMode.Quarter;
  disabledDates: DisabledDates = {
    dates: [
      new Date(2024, 0, 1),  // New Year
      new Date(2024, 6, 4)   // Independence Day
    ],
    before: new Date(2024, 0, 1)  // No dates before 2024
  };
  weekStart = 1; // Start week on Monday
}
```

```html
<!-- component.html -->
<angular-datepicker2
  [(selectedDates)]="selectedDates"
  [viewMode]="viewMode"
  [disabledDates]="disabledDates"
  [weekStart]="weekStart">
</angular-datepicker2>
```

### Custom Day Templates with Events
```typescript
// component.ts
export class MyComponent {
  selectedDates: Date[] = [];
  holidays: Date[] = [
    new Date(2024, 0, 1),   // New Year
    new Date(2024, 6, 4),   // Independence Day
    new Date(2024, 11, 25)  // Christmas
  ];
  
  isHoliday(date: Date): boolean {
    return this.holidays.some(holiday => 
      holiday.getTime() === date.getTime()
    );
  }
  
  onDayClick(day: Day) {
    if (this.isHoliday(day.date)) {
      alert('This is a holiday!');
    }
  }
}
```

```html
<!-- component.html -->
<angular-datepicker2
  [(selectedDates)]="selectedDates"
  (onDayClick)="onDayClick($event)">
  
  <div *ngFor="let holiday of holidays">
    <div *ad2day="let date from holiday" 
         class="holiday-day"
         [class.highlight]="isHoliday(date)">
      {{ date.getDate() }}
      <i class="holiday-icon">🎉</i>
    </div>
  </div>
</angular-datepicker2>
```

## Best Practices

### 1. Performance Optimization
- Use `OnPush` change detection strategy when possible
- Avoid creating new Date objects in templates
- Use trackBy functions when using *ngFor with custom day templates

```typescript
// Good: Pre-compute dates
export class MyComponent implements OnInit {
  holidays: Date[] = [];
  
  ngOnInit() {
    this.holidays = this.getHolidaysForYear(2024);
  }
  
  trackByHoliday(index: number, holiday: Date): number {
    return holiday.getTime();
  }
}
```

```html
<!-- Good: Use trackBy -->
<div *ngFor="let holiday of holidays; trackBy: trackByHoliday">
  <div *ad2day="let date from holiday">
    {{ date.getDate() }}
  </div>
</div>
```

### 2. Accessibility
- Always provide meaningful labels and descriptions
- Ensure keyboard navigation works properly
- Use ARIA attributes where appropriate

```html
<angular-datepicker2
  [(selectedDates)]="selectedDates"
  [selectMode]="selectMode"
  role="application"
  aria-label="Date picker for selecting dates"
  aria-describedby="datepicker-help">
</angular-datepicker2>

<div id="datepicker-help">
  Use arrow keys to navigate, Enter to select dates.
</div>
```

### 3. Internationalization
- Always register locale data for your target languages
- Consider right-to-left (RTL) languages
- Use Angular's i18n features for text content

```typescript
// app.module.ts
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import localeHe from '@angular/common/locales/he';

registerLocaleData(localeAr, 'ar');
registerLocaleData(localeHe, 'he');
```

### 4. Error Handling
- Always validate date inputs
- Handle edge cases like invalid dates
- Provide user feedback for errors

```typescript
export class MyComponent {
  selectedDates: Date[] = [];
  
  onDateChange(dates: Date[]) {
    try {
      // Validate dates
      const validDates = dates.filter(date => 
        date instanceof Date && !isNaN(date.getTime())
      );
      
      if (validDates.length !== dates.length) {
        console.warn('Some invalid dates were filtered out');
      }
      
      this.selectedDates = validDates;
    } catch (error) {
      console.error('Error processing dates:', error);
    }
  }
}
```

### 5. Custom Styling
- Use CSS custom properties for theming
- Follow BEM methodology for CSS classes
- Ensure responsive design

```scss
// Custom theme variables
:root {
  --datepicker-primary-color: #007bff;
  --datepicker-secondary-color: #6c757d;
  --datepicker-background: #ffffff;
  --datepicker-border-radius: 4px;
}

// Custom day styling
.custom-day {
  position: relative;
  
  &.special {
    background-color: var(--datepicker-primary-color);
    color: white;
  }
  
  &.holiday {
    background-color: #ffc107;
    color: #212529;
  }
}
```

## Troubleshooting

### Common Issues

#### 1. Dates not displaying correctly
**Problem:** Dates appear in wrong format or timezone
**Solution:** Ensure proper locale registration and timezone handling

```typescript
// Make sure to register locale data
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';

registerLocaleData(localeEn, 'en');
```

#### 2. Custom day templates not working
**Problem:** Custom day templates not rendering
**Solution:** Check directive syntax and ensure proper date binding

```html
<!-- Correct syntax -->
<div *ad2day="let date from myDate">
  {{ date.getDate() }}
</div>

<!-- Incorrect syntax -->
<div *ad2day="myDate">
  {{ myDate.getDate() }}
</div>
```

#### 3. Two-way binding not working
**Problem:** selectedDates not updating when dates are selected
**Solution:** Ensure proper event binding and change detection

```html
<!-- Correct two-way binding -->
<angular-datepicker2
  [(selectedDates)]="selectedDates">
</angular-datepicker2>

<!-- Also handle the event if needed -->
<angular-datepicker2
  [(selectedDates)]="selectedDates"
  (selectedDatesChange)="onDatesChange($event)">
</angular-datepicker2>
```

#### 4. Performance issues with large date ranges
**Problem:** Slow rendering with many months or custom days
**Solution:** Optimize with OnPush strategy and virtual scrolling

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  // Implementation
}
```

#### 5. Disabled dates not working
**Problem:** Dates that should be disabled are still selectable
**Solution:** Check DisabledDates configuration and date comparison

```typescript
// Ensure dates are properly formatted
const disabledDates: DisabledDates = {
  dates: [
    new Date(2024, 0, 1), // January 1, 2024
    new Date(2024, 6, 4)  // July 4, 2024
  ]
};
```

### Debugging Tips

1. **Enable Angular DevTools** for component inspection
2. **Use console.log** to track date changes and component state
3. **Check browser console** for any JavaScript errors
4. **Verify date objects** are valid Date instances
5. **Test with different browsers** for compatibility issues

### Browser Compatibility

- **Chrome:** 60+
- **Firefox:** 55+
- **Safari:** 12+
- **Edge:** 79+
- **IE:** Not supported (Angular 8+ requirement)

### Migration Guide

#### From Angular Datepicker 1.x
1. Update import statements
2. Change component selector from `datepicker` to `angular-datepicker2`
3. Update property names (some may have changed)
4. Review breaking changes in the changelog

#### From other datepicker libraries
1. Map your existing configuration to Angular Datepicker 2 properties
2. Update template syntax for custom day rendering
3. Adjust event handling for the new API
4. Test thoroughly with your specific use cases

---

*This documentation covers Angular Datepicker 2 version 3.4.3. For the latest updates and changes, please refer to the official repository and changelog.*
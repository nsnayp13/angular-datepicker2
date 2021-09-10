# Angular Datepicker 2

v3.x.x

![Node.js CI](https://github.com/nsnayp13/angular-datepicker2/workflows/Node.js%20CI/badge.svg)

`npm i angular-datepicker2`

now @angular/core: ^8.2.14

## DEMO

[https://nsnayp13.github.io/angular-datepicker2/](https://nsnayp13.github.io/angular-datepicker2/)

## Getting started

Set to imports app.module.ts `import { AngularDatepicker2Module } from 'angular-datepicker2'`. Then you can use it by tag `<angular-datepicker2></angular-datepicker2>`.

## Options

Props of `AngularDatepicker2`:

```javascript

// Array of selected dates.
[(selectedDates)]: Date[]

// Array custom definitions of days. Subscribable. See Day interface
[days]: Day[]

// Array custom definitions of suggestions. Suggestions for select dates
[suggest]: Suggest[]

// Date whould be render for default calendar .
shownDate: Date

// Disabed dates to select by click on a day. See DisabledDates interface. Suggest select work
disabledDates: DisabledDates

// Alignment of days in a week. Default horizontal.
vertical: boolean

// Present mode of calendar. Quarter, semester or number of months. Default 1. Import from public-api or interfaces. Its enum
viewMode: ViewMode | number

// Start week day, default 0
weekStart: number

// Weekends, default [0,6], set Day.isWeekend true
weekends: number[] = [0, 6]

// Single, Multiple, Period. Import from public-api or interfaces. Its enum
selectMode: SelectMode

// Callback event when click on day
// its returns a Day object before change self state by click
(onDayClick):Day

// Callback event when selectedDatesChange changed
// its returns a Date[]
(selectedDatesChange):Date[]
```

## i18n

set `registerLocaleData(locale, "locale")` in your `app.module.ts`. See [https://angular.io/api/common/registerLocaleData](https://angular.io/api/common/registerLocaleData)

## Example

```javascript
this.selectedDates = [new Date(2020, 3, 7), new Date(2020, 3, 9)];

this.shownDate = new Date(2020, 3, 7);

this.disabledDates = {
  dates?:[], // :Date[]
  after?: new Date(2020, 3, 7), // :Date
  before?:null // : Date
};

this.suggest = [
  {
    title: "Last two weeks",
    selectMode: SelectMode.Period,
    selectedDates: [new Date(2020, 3, 1), new Date(2020, 3, 12)],
  },
  {
    title: "Last month",
    selectMode: SelectMode.Period,
    selectedDates: [new Date(2020, 3, 1), new Date(2020, 3, 30)],
  },
  {
    title: "1, 4 and 30",
    selectMode: SelectMode.Multiple,
    selectedDates: [
      new Date(2020, 3, 1),
      new Date(2020, 3, 4),
      new Date(2020, 3, 30),
    ],
  },
];


this.days = [
  {
    isDisabled: false,
    isHovered: false,
    isSelected: false,
    isWeekEnd: true,
    date: new Date(2020, 3, 21),
  },
  {
    isDisabled: true,
    isHovered: false,
    isSelected: false,
    isWeekEnd: true,
    date: new Date(2020, 3, 26),
  },
];
```

```html
<angular-datepicker2
  [shownDate]="shownDate"
  [suggest]="suggest"
  [days]="days"
  [(selectedDates)]="selectedDates"
  [selectMode]="'period'"
  [weekends]="[0,1]"
  [weekStart]="1"
  [viewMode]="'quarter'"
  [disabledDates]="disabledDates"
>
  <!--  Here special directive *day="let date from new Date()"
        Wrap or html or component by *day
  -->

  <!--  If you are use *ngFor set it to ng-container. 
        <ng-container *ngFor="let dateItem of datesArray">
          <yourComponentOrDiv *ad2day="let date from dateItem">
              day is {{date.getDate()}}
          </yourComponentOrDiv>
        </ng-container>
  -->

  <div *day="let date from days[0].date" [attr.title]="'Custom day'">
    {{date.getDate()}}
    <div class="points">
      <div class="point blue"></div>
      <div class="point green"></div>
    </div>
    <!--app -my-custom-component-->
  </div>
</angular-datepicker2>
```

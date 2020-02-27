# Angular Datepicker2 : v2.1.x

![Node.js CI](https://github.com/nsnayp13/angular-datepicker2/workflows/Node.js%20CI/badge.svg)


`npm i angular-datepicker2`

![angular datepicker2](https://s4.gifyu.com/images/Peek-2020-02-27-13-33.gif)


now @angular/core: ^8.2.14


## DEMO

[https://angular-datepicker.com/](https://angular-datepicker.com/)


## Getting started

Set to imports app.module.ts `import { AngularDatepicker2Module } from 'angular-datepicker2'`. Then you can use it by tag  `<angular-datepicker2></angular-datepicker2>`.


## Options

Props of `AngularDatepicker2`:

```javascript

// Array of selected dates.
[(selectedDates)]: Date[]

// Array custom definitions of days. Subscribable. See Day interface
[days]: Day[]

// Date whould be render for default calendar .
shownDate: Date

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
(onDayClick) 


```

## i18n

set `registerLocaleData(locale, "locale")` in your `app.module.ts`. See [https://angular.io/api/common/registerLocaleData](https://angular.io/api/common/registerLocaleData)

## Example

```javascript

this.selectedDates = [
    new Date(2020, 3, 7),
    new Date(2020, 3, 9),

];

this.shownDate = new Date(2020, 3, 7);   

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
        template: {
          component:
          {
            componentClass: TestDayComponent,
            props: [
              {
                propName: 'title',
                type: 'input',
                value: new Date(2020, 3, 26).getDate()
              },
              {
                propName: 'callback2',
                type: 'output',
                value: (data) => {
                  alert('click custom day. See Day interface')
                }
              }
            ]
          }
        }
    }
];
```

```html

<angular-datepicker2 [shownDate]="shownDate" [days]="days" [(selectedDates)]="selectedDates" [selectMode]="'period'" [weekends]="[0,1]" [weekStart]="1" [viewMode]="'quarter'"></angular-datepicker2>

```
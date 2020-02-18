import { NgModule } from '@angular/core';
import { AngularDatepicker2 } from './calendar/angular-datepicker2.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MonthViewComponent } from './month-view/month-view.component';
import { DayViewComponent } from './day-view/day-view.component';
import { MonthSelectComponent } from './month-select/month-select.component';
import { YearSelectComponent } from './year-select/year-select.component';
import { WeekViewComponent } from './week-view/week-view.component';

@NgModule({
  declarations: [AngularDatepicker2,
    MonthViewComponent,
    DayViewComponent,
    MonthSelectComponent,
    YearSelectComponent,
    WeekViewComponent],
  imports: [BrowserModule, FormsModule
  ],
  exports: [AngularDatepicker2]
})
export class AngularDatepicker2Module { }

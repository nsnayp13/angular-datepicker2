import { NgModule } from "@angular/core";
import { AngularDatepicker2 } from "./calendar/angular-datepicker2.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MonthViewComponent } from "./month-view/month-view.component";
import { DayViewComponent } from "./day-view/day-view.component";
import { MonthSelectComponent } from "./month-select/month-select.component";
import { YearSelectComponent } from "./year-select/year-select.component";
import { WeekViewComponent } from "./week-view/week-view.component";
import { CommonModule } from "@angular/common";
import { DayDirective } from "./day.directive";

@NgModule({
  declarations: [
    AngularDatepicker2,
    MonthViewComponent,
    DayViewComponent,
    MonthSelectComponent,
    YearSelectComponent,
    WeekViewComponent,
    DayDirective,
  ],
  imports: [CommonModule],
  exports: [AngularDatepicker2, DayDirective],
})
export class AngularDatepicker2Module {}

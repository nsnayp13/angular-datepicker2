import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalendarComponent } from "../../projects/angular-calendar/src/lib/calendar/calendar.component";
import { MonthViewComponent } from "../../projects/angular-calendar/src/lib/month-view/month-view.component";
import { DayViewComponent } from "../../projects/angular-calendar/src/lib/day-view/day-view.component";
import { MonthSelectComponent } from "../../projects/angular-calendar/src/lib/month-select/month-select.component";
import { YearSelectComponent } from "../../projects/angular-calendar/src/lib/year-select/year-select.component";

import { registerLocaleData } from "@angular/common";
import localeRu from "@angular/common/locales/ru";
import { WeekViewComponent } from "../../projects/angular-calendar/src/lib/week-view/week-view.component";
import { TestDayComponent } from "../../projects/angular-calendar/src/lib/test-day/test-day.component";
import { FormsModule } from '@angular/forms';

registerLocaleData(localeRu, "ru");

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthViewComponent,
    DayViewComponent,
    MonthSelectComponent,
    YearSelectComponent,
    WeekViewComponent,
    TestDayComponent
  ],

  entryComponents: [TestDayComponent],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: "ru" }],
  bootstrap: [AppComponent]
})
export class AppModule { }

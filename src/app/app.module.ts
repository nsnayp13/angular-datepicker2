import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { MonthViewComponent } from "./month-view/month-view.component";
import { DayViewComponent } from "./day-view/day-view.component";
import { MonthSelectComponent } from "./month-select/month-select.component";
import { YearSelectComponent } from "./year-select/year-select.component";

import { registerLocaleData } from "@angular/common";
import localeRu from "@angular/common/locales/ru";
import { WeekViewComponent } from "./week-view/week-view.component";

registerLocaleData(localeRu, "ru");

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthViewComponent,
    DayViewComponent,
    MonthSelectComponent,
    YearSelectComponent,
    WeekViewComponent
  ],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "ru" }],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppComponent } from "./app.component";


import { registerLocaleData } from "@angular/common";
import localeRu from "@angular/common/locales/ru";

import { TestDayComponent } from "./test-day/test-day.component";
import { FormsModule } from '@angular/forms';
import { AngularDatepicker2, AngularDatepicker2Module, Day } from 'angular-datepicker2';

registerLocaleData(localeRu, "ru");

@NgModule({
  declarations: [
    AppComponent,
    TestDayComponent
  ],

  entryComponents: [TestDayComponent],
  imports: [BrowserModule, FormsModule, AngularDatepicker2Module],
  providers: [{ provide: LOCALE_ID, useValue: "ru" }],
  bootstrap: [AppComponent]
})
export class AppModule { }

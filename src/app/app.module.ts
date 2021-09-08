import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppComponent } from "./app.component";

import { registerLocaleData } from "@angular/common";
import localeEn from "@angular/common/locales/en";

import { FormsModule } from "@angular/forms";
import { AngularDatepicker2Module } from "projects/angular-datepicker2/src/public-api";
registerLocaleData(localeEn, "en");

@NgModule({
  declarations: [AppComponent],

  entryComponents: [],
  imports: [BrowserModule, FormsModule, AngularDatepicker2Module],
  providers: [{ provide: LOCALE_ID, useValue: "en" }],
  bootstrap: [AppComponent],
})
export class AppModule {}

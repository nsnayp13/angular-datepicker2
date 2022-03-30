import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppComponent } from "./app.component";

import { registerLocaleData } from "@angular/common";
import localeEn from "@angular/common/locales/en";

import { FormsModule } from "@angular/forms";
import { CustomDatepickerModule } from "projects/ngx-custom-datepicker/src/public-api";
registerLocaleData(localeEn, "en");

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CustomDatepickerModule],
  providers: [{ provide: LOCALE_ID, useValue: "en" }],
  bootstrap: [AppComponent],
})
export class AppModule {}

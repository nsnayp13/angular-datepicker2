import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeRu from "@angular/common/locales/ru";
import { CalendarService, Day, Calendar } from "../_service/calendar.service";

interface Suggest {
  title: string;
  dates: [];
}

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
  providers: [CalendarService]
})
export class CalendarComponent implements OnInit, OnChanges {
  /** Init array of selected dates */
  @Input() selectedDates: [] = [];
  @Input() shownDate: Date;

  /** year, quarter, semester or qty months (max 12) */
  @Input() viewMode: string | number;

  /** Single, multiple, period or keyboard */
  selectMode: string;
  /** day, month, year */
  viewSelectorMode: string;

  weekStart: number;
  weekends: [];
  timeMode: string;
  disabled?: {
    // disable date to select
    enabled: true;
    mode: "after"; // 'after'|'before'
  };
  suggestions: [];
  days: Day[];
  nowDate: Date;
  showMonthQty: number;

  calendar: any[];

  constructor(private calendarService: CalendarService) {
    registerLocaleData(localeRu, "ru");
  }

  ngOnInit() {
    //console.log("onInit");

    //this.nowDate = new Date();

    this.goToDate();
    this.setSelectedDates();
    this.calendarService.calendar.subscribe(data => {
      this.calendar = data;
    });
  }

  ngOnChanges() {
    this.goToDate();
  }

  /** Show date in calendar */
  goToDate() {
    this.calendarService.setShownDate(this.shownDate);
    this.calendarService.getShownMonths(this.viewMode);
  }

  /** Set dates would be selected in calendar. Depend from selectMode */
  setSelectedDates() {
    this.calendarService.setSelectedDates(this.selectedDates);
  }

  /** Set custom Day[] */
  setDays(days: Day[]) {}

  goNext() {
    let lastDate = this.calendar[this.calendar.length - 1];
    this.calendarService.goNext(lastDate);
  }
  goPrev() {
    let firstDate = this.calendar[0];
    this.calendarService.goPrev(firstDate);
  }
}

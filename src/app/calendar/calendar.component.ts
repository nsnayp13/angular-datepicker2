import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewChildren,
  AfterViewChecked,
  EventEmitter,
  Output
} from "@angular/core";
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
export class CalendarComponent implements OnInit, OnChanges, AfterViewChecked {
  /**
   * @description
   *  Array of selected dates.
   * */
  @Input() selectedDates: Date[] = [];
  @Output() selectedDatesChange = new EventEmitter<Date[]>()

  /**
   * @description
   *  Array custom definitions of days. Subscribable
   * @see `Day`
   * */
  @Input() days: Day[];

  /**
   * @description
   *  Date whould be render for default calendar .
   * */
  @Input() shownDate: Date;

  /**
   * @description
   *  Alignment of days in a week. Default horizontal.
   * */
  @Input() vertical: boolean;

  /**
   * @description
   * Present mode of calendar. Year, quarter, semester or qty months. Default 1.
   * */
  @Input() viewMode: string | number;

  /**
   * @description
   * Start week day, default 0
   */
  @Input() weekStart: number = 0;

  /**
   * @description
   * Weekends, default [0,6], set Day.isWeekend true
   */
  @Input() weekends: number[] = [0, 6];

  /**
   * @description
   * Single, multiple, period 
  */
  @Input() selectMode: string = 'single';


  /** day, month, year */
  private viewSelectorMode: string = "days";



  timeMode: string;
  disabled?: {
    // disable date to select
    enabled: true;
    mode: "after"; // 'after'|'before'
  };
  suggestions: [];

  nowDate: Date;
  showMonthQty: number;

  calendar: any[];
  updateDate;

  width: number | null;

  @ViewChildren("someName") someDivs;

  constructor(private calendarService: CalendarService) {
    //setTimeout(() => this.changeViewSelectorMode(), 1000);
  }

  recountWidth() {
    let width = 0;
    this.someDivs
      ? this.someDivs
        .toArray()
        .map(item => (width += item.elementView.nativeElement.clientWidth))
      : null;
    this.calendarService.animationStep.value === "stop" &&
      this.viewSelectorMode === "days"
      ? (this.width = width)
      : null;
  }

  ngAfterViewChecked() {
    this.recountWidth();
  }

  ngOnInit() {
    this.calendarService.viewSelectorMode.next("days");
    this.calendarService.viewMode.next(this.viewMode);
    this.calendarService.selectMode.next(this.selectMode);
    this.calendarService.days.next(this.days);
    this.calendarService.weekStart = this.weekStart;
    this.calendarService.weekends = this.weekends;
    // console.log(this.weekends);

    this.goToDate();
    this.setSelectedDates();

    this.calendarService.viewSelectorMode.subscribe(
      data => (this.viewSelectorMode = data)
    );

    this.calendarService.calendar.subscribe(data => {
      this.calendar = data;
    });

    this.calendarService.animationStep.subscribe(data => {
      if (data === "stop") {
        setTimeout(() => this.recountWidth(), 10);
      }
    });

    this.calendarService.updateDate.subscribe(data => {
      this.updateDate = data;
    });

    this.calendarService.selectedDates.subscribe(data => {
      this.selectedDates = data;
      this.selectedDatesChange.emit(this.selectedDates)
    });
  }

  ngOnChanges() {
    //this.goToDate();
  }

  /** Show date in calendar */
  goToDate() {
    this.calendarService.setShownDate(this.shownDate);
    this.calendarService.getShownMonths(this.shownDate);
  }

  /** Set dates would be selected in calendar. Depend from selectMode */
  setSelectedDates() {
    this.calendarService.setSelectedDates(this.selectedDates);
  }

  /** Set custom Day[] */
  setDays(days: Day[]) { }

  goNext() {
    let lastDate = this.calendar[this.calendar.length - 1];
    this.calendarService.goNext(lastDate);
  }
  goPrev() {
    let firstDate = this.calendar[0];
    this.calendarService.goPrev(firstDate);
  }
}

import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewChildren,
  AfterViewChecked,
  EventEmitter,
  Output,
  ChangeDetectorRef,
} from "@angular/core";
import { CalendarService } from "../_service/calendar.service";
import { Day, SelectMode, ViewMode } from '../interfaces';




@Component({
  selector: "angular-datepicker2",
  templateUrl: "./angular-datepicker2.component.html",
  styleUrls: ["./angular-datepicker2.component.scss"],
  providers: [CalendarService]
})
export class AngularDatepicker2 implements OnInit, OnChanges, AfterViewChecked {
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
  @Input() viewMode: ViewMode | number;

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
   * Single, Multiple, Period 
   * @See `SelectMode` 
  */
  @Input() selectMode: SelectMode;


  /**
  * @description
  * Date  
  * @See `SelectMode` 
 */
  @Input() nowDate: Date;

  @ViewChildren("column") columns;

  width: number | null;

  // disabled?: {
  //   enabled: true;
  //   mode: "after"; // 'after'|'before'
  // };

  //suggestions: [];


  //showMonthQty: number;






  constructor(private calendarService: CalendarService, private cdr: ChangeDetectorRef) {
    //setTimeout(() => this.changeViewSelectorMode(), 1000);
  }

  recountWidth() {
    let width = 0;
    this.columns
      ? this.columns
        .toArray()
        .map(item => (width += item.elementView.nativeElement.clientWidth))
      : null;
    this.calendarService.animationStep.value === "stop" &&
      this.calendarService.viewSelectorMode === "days"
      ? (this.width = width)
      : null;

    this.cdr.detectChanges();
  }

  ngAfterViewChecked() {
    this.recountWidth();
  }

  ngOnInit() {

    this.calendarService.animationStep.subscribe(data => {
      if (data === "stop") {
        setTimeout(() => this.recountWidth(), 10);
      }
    });

    this.calendarService.selectedDates.subscribe(data => {
      this.selectedDatesChange.emit(data)
    });

    this.calendarService.days.next(this.days);
    this.calendarService.weekStart = this.weekStart;
    this.calendarService.weekends = this.weekends;
    this.calendarService.viewMode = this.viewMode;
    this.calendarService.viewSelectorMode = 'days';
    this.calendarService.selectMode = this.selectMode;
    this.calendarService.shownDate = this.shownDate;

    this.calendarService.setSelectedDates(this.selectedDates);
    this.calendarService.setDays(this.days);

    this.calendarService.getShownMonths(this.shownDate);



  }



  getCalendar() {
    return this.calendarService.calendar;
  }

  getViewSelectorMode() {
    return this.calendarService.viewSelectorMode;
  }




  calculate() {
    let date = this.shownDate
    let countMonths = 0;
    const months = [];
    let lastDate: Date;

    lastDate = date ? date : this.calendarService.getLastDate();
    countMonths = this.calendarService.getCountMonths();
    //this.countMonths = countMonths;

    for (let i = countMonths - 1; i >= 0; i--) {
      months.push(new Date(lastDate).adjustMonth(-i));
    }

    return months;
  }

  isEqual(array, array1) {
    console.log(array, array1)
    let a = array.filter(
      item => array1.includes(item)
    );
    return (a.length === 0 && array.length === array1.length);
  }

  private _viewMode(simpleChange) {
    if (simpleChange.viewMode.currentValue !== simpleChange.viewMode.previousValue) {
      this.calendarService.viewMode = simpleChange.viewMode.currentValue;
      this.calendarService.getShownMonths(this.shownDate);
      setTimeout(() => this.recountWidth(), 10);
    }
  }


  private _selectMode(simpleChange) {
    if (simpleChange.selectMode.currentValue !== simpleChange.selectMode.previousValue) {
      this.calendarService.selectMode = simpleChange.selectMode.currentValue;
      this.calendarService.getShownMonths(this.shownDate);
      setTimeout(() => this.recountWidth(), 10);
    }
  }

  private _shownDate(simpleChange) {
    if (simpleChange.shownDate.currentValue !== simpleChange.shownDate.previousValue) {
      this.calendarService.shownDate = simpleChange.shownDate.currentValue;
      this.calendarService.getShownMonths(this.shownDate);
      setTimeout(() => this.recountWidth(), 10);
    }
  }

  /* private _vertical(simpleChange) {
     this.calendarService.ve vertical = simpleChange.vertical.currentValue;
   } */


  ngOnChanges(simpleChange) {
    //console.log(simpleChange);
    (simpleChange.viewMode) && this._viewMode(simpleChange);
    (simpleChange.selectMode) && this._selectMode(simpleChange);
    (simpleChange.shownDate) && this._shownDate(simpleChange);
  }





  /** Set custom Day[] */
  setDays(days: Day[]) { }

  goNext() {
    let lastDate = this.calendarService.calendar[this.calendarService.calendar.length - 1];
    this.calendarService.goNext(lastDate);
  }
  goPrev() {
    let firstDate = this.calendarService.calendar[0];
    this.calendarService.goPrev(firstDate);
  }
}

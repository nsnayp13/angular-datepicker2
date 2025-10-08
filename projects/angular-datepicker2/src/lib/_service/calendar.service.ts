import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Day, DisabledDates, ViewMode } from "../interfaces";
import { DateUtils } from "../_utils/date.utils";

@Injectable({
  providedIn: "root",
})
export class CalendarService {
  //calendar: BehaviorSubject<any[]> = new BehaviorSubject([]);
  calendar: Date[] = [];
  shownDate!: Date;
  viewMode: ViewMode | number = ViewMode.Month;
  viewSelectorMode: string = "days";
  selectMode: any;

  selectedDates: BehaviorSubject<Date[]> = new BehaviorSubject<Date[]>([]);
  disabledDates: BehaviorSubject<DisabledDates> = new BehaviorSubject<DisabledDates>(null as any);
  days: BehaviorSubject<Day[]> = new BehaviorSubject<Day[]>([]);

  countMonths: number = 1;
  weekStart: number = 0;
  weekends: number[] = [0, 6];
  showPrevNextDaysInOneMonth: boolean = false;

  // Add reactive subjects for weekStart and weekends
  weekStartSubject = new BehaviorSubject<number>(0);
  weekendsSubject = new BehaviorSubject<number[]>([0, 6]);

  animationStep = new BehaviorSubject("stop");

  recountWidth = new BehaviorSubject(1);

  /** Needs for onClickDay detect change */
  clickDayKey: BehaviorSubject<{
    day: Day;
    key: string;
  } | null> = new BehaviorSubject<{day: Day; key: string} | null>(null);

  updateDate = new BehaviorSubject(new Date());

  constructor() {}

  setSelectedDates(selectedDates: Date[]) {
    this.selectedDates.next(selectedDates);
  }

  setDisabledDates(disabledDates: DisabledDates) {
    this.disabledDates.next(disabledDates);
  }

  setDays(days: Day[]) {
    this.days.next(days);
  }

  setShownDate(date: Date) {
    this.shownDate = date;
  }

  setWeekStart(weekStart: number) {
    if (this.weekStart !== weekStart) {
      this.weekStart = weekStart;
      this.weekStartSubject.next(weekStart);
      // Trigger calendar recalculation
      this.getShownMonths(this.shownDate);
    }
  }

  setWeekends(weekends: number[]) {
    if (!this.arraysEqual(this.weekends, weekends)) {
      this.weekends = weekends;
      this.weekendsSubject.next(weekends);
      // Trigger calendar recalculation
      this.getShownMonths(this.shownDate);
    }
  }

  setShowPrevNextDaysInOneMonth(showPrevNextDaysInOneMonth: boolean) {
    if (this.showPrevNextDaysInOneMonth !== showPrevNextDaysInOneMonth) {
      this.showPrevNextDaysInOneMonth = showPrevNextDaysInOneMonth;
      // Trigger calendar recalculation
      this.getShownMonths(this.shownDate);
    }
  }

  private arraysEqual(a: number[], b: number[]): boolean {
    if (!a && !b) return true;
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    return a.every((val, index) => val === b[index]);
  }

  addSelected(date: Date) {
    let selectedDates = this.selectedDates.value;
    selectedDates.push(date);
    this.selectedDates.next(selectedDates);
  }

  public getCountMonths(): number {
    let viewMode = this.viewMode;
    if (typeof viewMode === "number") {
      return viewMode;
    } else {
      if (viewMode === ViewMode.Quarter) {
        return 3;
      } else if (viewMode === ViewMode.Semester) {
        return 6;
      }
    }
    return 1;
  }

  public getLastDate(date?: Date): Date {
    //console.log(date, 'date getlasr')
    let viewMode = this.viewMode;
    let lastDate = this.shownDate
      ? new Date(this.shownDate)
      : this.selectedDates.value.length > 0
      ? new Date(this.selectedDates.value[this.selectedDates.value.length - 1])
      : new Date();

    lastDate = date ? new Date(date) : lastDate;

    //if (typeof viewMode === "ViewMode") {
    if (viewMode === ViewMode.Quarter) {
      if (lastDate.getMonth() >= 0 && lastDate.getMonth() <= 2) {
        lastDate = new Date(lastDate.getFullYear(), 2, lastDate.getDate());
      } else if (lastDate.getMonth() >= 3 && lastDate.getMonth() <= 5) {
        lastDate = new Date(lastDate.getFullYear(), 5, lastDate.getDate());
      } else if (lastDate.getMonth() >= 6 && lastDate.getMonth() <= 8) {
        lastDate = new Date(lastDate.getFullYear(), 8, lastDate.getDate());
      } else if (lastDate.getMonth() >= 9 && lastDate.getMonth() <= 11) {
        lastDate = new Date(lastDate.getFullYear(), 11, lastDate.getDate());
      }
    } else if (viewMode === ViewMode.Semester) {
      if (lastDate.getMonth() >= 0 && lastDate.getMonth() <= 5) {
        lastDate = new Date(lastDate.getFullYear(), 5, lastDate.getDate());
      } else if (lastDate.getMonth() >= 6 && lastDate.getMonth() <= 11) {
        lastDate = new Date(lastDate.getFullYear(), 11, lastDate.getDate());
      }
    }
    //}

    return lastDate;
  }

  getShownYears(lastDateShown: Date) {
    let countMonths = 0;
    const months = [];

    countMonths = this.getCountMonths();
    this.countMonths = countMonths;

    for (let i = countMonths - 1; i >= 0; i--) {
      months.push(DateUtils.adjustYear(new Date(lastDateShown), -i));
    }
    this.calendar = months;
    this.viewSelectorMode = "months";
  }

  getShownMonths(date?: Date) {
    let countMonths = 0;
    const months = [];
    let lastDate: Date;

    lastDate = this.getLastDate(date);
    countMonths = this.getCountMonths();
    this.countMonths = countMonths;

    for (let i = countMonths - 1; i >= 0; i--) {
      months.push(DateUtils.adjustMonth(new Date(lastDate), -i));
    }

    this.calendar = months;
    this.viewSelectorMode = "days";
  }

  goPrev(firstDate: Date) {
    let prevDate = new Date(firstDate);

    if (this.viewSelectorMode === "days") {
      prevDate = DateUtils.adjustMonth(prevDate, -1);
    } else if (this.viewSelectorMode === "months") {
      prevDate = DateUtils.adjustYear(prevDate, -1);
    }

    let dates = [...this.calendar];
    dates.unshift(prevDate);
    this.calendar = dates;
    this.animationStep.next("left");

    setTimeout(() => {
      dates = [...this.calendar];
      dates.splice(dates.length - 1, 1);
      this.calendar = dates;
      this.animationStep.next("stop");
    }, 205);
  }

  goNext(lastDate: Date) {
    let nextDate = new Date(lastDate);

    if (this.viewSelectorMode === "days") {
      nextDate = DateUtils.adjustMonth(nextDate, 1);
    } else if (this.viewSelectorMode === "months") {
      nextDate = DateUtils.adjustYear(nextDate, 1);
    }

    let dates = [...this.calendar];
    //dates.splice(0, 1);
    dates.push(nextDate);
    this.calendar = dates;
    this.animationStep.next("right");

    setTimeout(() => {
      dates = [...this.calendar];

      dates.splice(0, 1);
      this.calendar = dates;
      this.animationStep.next("stop");
      //this.recountWidth.next(this.recountWidth.value + 1);
    }, 205);
  }
}

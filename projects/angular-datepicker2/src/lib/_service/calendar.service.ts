import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Day } from '../interfaces';

declare global {
  interface Date {
    adjustMonth(number: number): Date;
    adjustDate(number: number): Date;
    adjustYear(number: number): Date;
    getFirstDateDay(start): number;
    getDayWithStart(start): number;
    getYmd(): string;
  }
}

Date.prototype.adjustDate = function (num = 0): Date {
  let date = new Date(this);
  date.setDate(date.getDate() + num);
  return date;
};

/** Adjust & setDate = 1 */
Date.prototype.adjustMonth = function (num = 0): Date {
  this.setDate(1);
  this.setMonth(this.getMonth() + num);
  return this;
};

/** Adjust & setDate = 1 */
Date.prototype.adjustYear = function (num = 0): Date {
  this.setDate(1);
  this.setMonth(0);
  this.setYear(this.getFullYear() + num);
  return this;
};

Date.prototype.getDayWithStart = function (start): number {
  const date = new Date(this.getTime());
  let day = date.getDay();

  day = day - start;

  if (day < 0) {
    day = 7 + day;
  }
  return day;
};

Date.prototype.getFirstDateDay = function (start): number {
  const date = new Date(this.getTime());
  date.setDate(1);
  return date.getDayWithStart(start);
};

Date.prototype.getYmd = function (): string {
  return (
    this.getFullYear().toString() +
    this.getMonth().toString() +
    this.getDate().toString()
  );
};


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  //calendar: BehaviorSubject<any[]> = new BehaviorSubject([]);
  calendar: Date[];
  shownDate: Date;
  viewMode;
  viewSelectorMode;
  selectMode;


  selectedDates: BehaviorSubject<Date[]> = new BehaviorSubject([]);
  days: BehaviorSubject<Day[]> = new BehaviorSubject([]);

  countMonths: number;
  weekStart: number;
  weekends: number[];

  animationStep = new BehaviorSubject("stop");

  recountWidth = new BehaviorSubject(1);

  /** Needs for onClickDay detect change */
  clickDayKey: BehaviorSubject<{ day: Day, key: string } | null> = new BehaviorSubject(null);



  updateDate = new BehaviorSubject(new Date());

  constructor() { }

  setSelectedDates(selectedDates: Date[]) {
    this.selectedDates.next(selectedDates);
  }




  setDays(days: Day[]) {
    this.days.next(days);
  }

  setShownDate(date: Date) {
    this.shownDate = date;
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
      if (viewMode === "quarter") {
        return 3;
      } else if (viewMode === "semester") {
        return 6;
      }
    }
    return 1;
  }

  public getLastDate(): Date {
    let viewMode = this.viewMode;
    let lastDate = this.shownDate
      ? new Date(this.shownDate)
      : this.selectedDates.value
        ? new Date(this.selectedDates[this.selectedDates.value.length - 1])
        : new Date();

    if (typeof viewMode === "string") {
      if (viewMode === "quarter") {
        if (lastDate.getMonth() >= 0 && lastDate.getMonth() <= 2) {
          lastDate.setMonth(2);
        } else if (lastDate.getMonth() >= 3 && lastDate.getMonth() <= 5) {
          lastDate.setMonth(5);
        } else if (lastDate.getMonth() >= 6 && lastDate.getMonth() <= 8) {
          lastDate.setMonth(8);
        } else if (lastDate.getMonth() >= 9 && lastDate.getMonth() <= 11) {
          lastDate.setMonth(11);
        }
      } else if (viewMode === "semester") {
        if (lastDate.getMonth() >= 0 && lastDate.getMonth() <= 5) {
          lastDate.setMonth(5);
        } else if (lastDate.getMonth() >= 6 && lastDate.getMonth() <= 11) {
          lastDate.setMonth(11);
        }
      }
    }

    return lastDate;
  }

  getShownYears(lastDateShown: Date) {
    let countMonths = 0;
    const months = [];

    countMonths = this.getCountMonths();
    this.countMonths = countMonths;

    for (let i = countMonths - 1; i >= 0; i--) {
      months.push(new Date(lastDateShown).adjustYear(-i));
    }
    this.calendar = months;
    this.viewSelectorMode = "months";
  }

  getShownMonths(date?: Date) {
    let countMonths = 0;
    const months = [];
    let lastDate: Date;

    lastDate = date ? date : this.getLastDate();
    countMonths = this.getCountMonths();
    this.countMonths = countMonths;

    for (let i = countMonths - 1; i >= 0; i--) {
      months.push(new Date(lastDate).adjustMonth(-i));
    }

    this.calendar = months;
    this.viewSelectorMode = "days";
  }

  goPrev(firstDate: Date) {
    let prevDate = new Date(firstDate);

    if (this.viewSelectorMode === "days") {
      prevDate.adjustMonth(-1);
    } else if (this.viewSelectorMode === "months") {
      prevDate.adjustYear(-1);
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
      nextDate.adjustMonth(1);
    } else if (this.viewSelectorMode === "months") {
      nextDate.adjustYear(1);
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

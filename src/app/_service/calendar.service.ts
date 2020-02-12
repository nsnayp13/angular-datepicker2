import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

declare global {
  interface Date {
    adjustMonth(number: number): Date;
    adjustYear(number: number): Date;
    getFirstDateDay(start): number;
    getDayWithStart(start): number;
    getYmd(): string;
  }
}

/** Adjust & setDate = 1 */
Date.prototype.adjustMonth = function(num = 0): Date {
  this.setDate(1);
  this.setMonth(this.getMonth() + num);
  return this;
};

/** Adjust & setDate = 1 */
Date.prototype.adjustYear = function(num = 0): Date {
  this.setDate(1);
  this.setMonth(0);
  this.setYear(this.getFullYear() + num);
  return this;
};

Date.prototype.getDayWithStart = function(start): number {
  const date = new Date(this.getTime());
  let day = date.getDay();

  day = day - start;

  if (day <= 0) {
    day = 7 + day;
  }

  console.log(date, date.getDay(), day, "start", start);

  return day;
};

Date.prototype.getFirstDateDay = function(start): number {
  const date = new Date(this.getTime());
  date.setDate(1);
  return date.getDayWithStart(start);
};

Date.prototype.getYmd = function(): string {
  return (
    this.getFullYear().toString() +
    this.getMonth().toString() +
    this.getDate().toString()
  );
};

export interface Day {
  id: number;
  title: string;
  isDisabled: boolean;
  isWeekEnd: boolean;
  isSelected: boolean;
  isHovered: boolean;
  template?: string;
  date?: Date;
}

export interface Week {
  id: number;
  days: Day[] | null;
}

export interface Month {
  id: number;
  date: Date;
  weeks: Week[] | null;
}

export interface Calendar {
  id?: number;
  months?: Month[] | null;
}

@Injectable({
  providedIn: "root"
})
export class CalendarService {
  calendar: BehaviorSubject<any[]> = new BehaviorSubject([]);
  selectedDates: BehaviorSubject<Date[]> = new BehaviorSubject([]);
  shownDate: Date;
  countMonths: number;

  animationStep = new BehaviorSubject("stop");

  recountWidth = new BehaviorSubject(1);

  viewSelectorMode = new BehaviorSubject(null);

  viewMode = new BehaviorSubject(null);

  updateDate = new BehaviorSubject(new Date());

  constructor() {}

  setSelectedDates(selectedDates: Date[]) {
    this.selectedDates.next(selectedDates); //= selectedDates ? selectedDates : [];
  }

  setShownDate(date: Date) {
    this.shownDate = date;
  }

  /*findInSelected(date: Date) {
    for (let k in this.selectedDates) {
      const item = this.selectedDates[k];
      if (date.getYmd() === item.getYmd()) {
        return true;
      }
    }
    return false;
  }*/

  addSelected(date: Date) {
    let selectedDates = this.selectedDates.value;
    selectedDates.push(date);
    this.selectedDates.next(selectedDates);
  }

  private getCountMonths(): number {
    let viewMode = this.viewMode.value;
    if (typeof viewMode === "number") {
      return viewMode;
    } else if (typeof viewMode === "string") {
      if (viewMode === "quarter") {
        return 3;
      } else if (viewMode === "semester") {
        return 6;
      }
    }
    return 1;
  }

  private getLastDate(): Date {
    let viewMode = this.viewMode.value;
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
    console.log(months);
    this.calendar.next(months);
    this.viewSelectorMode.next("months");
  }

  getShownMonths(date?: Date) {
    let countMonths = 0;
    const months = [];
    let lastDate: Date;

    lastDate = date ? date : this.getLastDate();
    countMonths = this.getCountMonths();
    this.countMonths = countMonths;
    //this.countMonths += 2;

    for (let i = countMonths - 1; i >= 0; i--) {
      months.push(new Date(lastDate).adjustMonth(-i));
    }

    this.calendar.next(months);
    this.viewSelectorMode.next("days");
  }

  goPrev(firstDate: Date) {
    let prevDate = new Date(firstDate);

    if (this.viewSelectorMode.value === "days") {
      prevDate.adjustMonth(-1);
    } else if (this.viewSelectorMode.value === "months") {
      prevDate.adjustYear(-1);
    }

    let dates = [...this.calendar.value];
    //dates.splice(dates.length - 1, 1);
    dates.unshift(prevDate);
    this.calendar.next(dates);
    this.animationStep.next("left");

    setTimeout(() => {
      dates = [...this.calendar.value];

      dates.splice(dates.length - 1, 1);
      this.calendar.next(dates);
      this.animationStep.next("stop");
      //this.recountWidth.next(this.recountWidth.value + 1);
    }, 205);
  }

  goNext(lastDate: Date) {
    let nextDate = new Date(lastDate);
    //nextDate.setMonth(lastDate.getMonth() + 1);

    if (this.viewSelectorMode.value === "days") {
      nextDate.adjustMonth(1);
    } else if (this.viewSelectorMode.value === "months") {
      nextDate.adjustYear(1);
    }

    let dates = [...this.calendar.value];
    //dates.splice(0, 1);
    dates.push(nextDate);
    this.calendar.next(dates);
    this.animationStep.next("right");

    setTimeout(() => {
      dates = [...this.calendar.value];

      dates.splice(0, 1);
      this.calendar.next(dates);
      this.animationStep.next("stop");
      //this.recountWidth.next(this.recountWidth.value + 1);
    }, 205);
  }

  reRenderCalendar() {
    /*this.calendar.next({
      months: { ...this.calendar.value.months }
    });*/
  }

  onClickDay(dayClicked: Day) {
    //this.selectedDates.push(dayClicked.date);
    /*let c = { ...this.calendar.value };
    this.calendar.next(c);*/
    //this.reRenderCalendar();
    /*for (let k_month in months) {
      for (let k_week in months[k_month].weeks) {
        for (let k_day in months[k_month].weeks[k_week].days) {
          if (months[k_month].weeks[k_week].days[k_day] === dayClicked) {
            months[k_month].weeks[k_week].days[k_day].isSelected = !months[
              k_month
            ].weeks[k_week].days[k_day].isSelected;

            if (months[k_month].weeks[k_week].days[k_day].isSelected) {
              this.selectedDates.push(
                months[k_month].weeks[k_week].days[k_day].date
              );
            }

            this.calendar.next({
              months
            });
          }
        }
      }
    }*/
  }

  // getMonth(date: Date) {
  //   const daysInMonth = new Date(
  //     date.getFullYear(),
  //     date.getMonth() + 1,
  //     0
  //   ).getDate();

  //   const countWeek = Math.ceil((daysInMonth + date.getFirstDateDay()) / 7);
  //   const month = {
  //     id: 1,
  //     date: date,
  //     weeks: []
  //   };
  //   /*for (let i = 0; i < countWeek; i++) {
  //     const startweekDate = new Date(date);
  //     startweekDate.setDate(date.getDate() + i * 7 - date.getDay());
  //     month.weeks.push(this.getWeek(startweekDate, date));
  //   }*/
  //   return month;
  // }

  // getWeek(date: Date /** first date in week */, monthFirstDate: Date) {
  //   const dayInWeek = 7;
  //   const dayInDate = date.getDay();
  //   const week: Week = {
  //     id: 1,
  //     days: []
  //   };

  //   for (let i = 0; i < dayInWeek; i++) {
  //     const curDate = new Date(date);
  //     curDate.setDate(curDate.getDate() + i);
  //     let isSelected = false;

  //     if (this.selectedDates) {
  //       for (let dateSelected of this.selectedDates) {
  //         if (dateSelected.getYmd() === curDate.getYmd()) {
  //           isSelected = true;
  //         }
  //       }
  //     }

  //     const day: Day = {
  //       id: 1,
  //       title: "",
  //       isDisabled:
  //         monthFirstDate.getMonth() === curDate.getMonth() &&
  //         monthFirstDate.getFullYear() === curDate.getFullYear()
  //           ? false
  //           : true,
  //       isWeekEnd: false,
  //       isSelected: isSelected,
  //       isHovered: false,
  //       template: "",
  //       date: curDate
  //     };
  //     week.days.push(day);
  //   }
  //   return week;
  // }
}

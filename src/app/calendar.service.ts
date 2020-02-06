import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

declare global {
  interface Date {
    adjustMonth(number: number): Date;
    getFirstDateDay(): number;
    getYmd(): string;
  }
}

/** Adjust & setDate = 1 */
Date.prototype.adjustMonth = function(num = 0): Date {
  this.setDate(1);
  this.setMonth(this.getMonth() + num);
  return this;
};

Date.prototype.getFirstDateDay = function(): number {
  const date = new Date(this.getTime());
  date.setDate(1);
  return date.getDay();
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
  calendar: BehaviorSubject<Calendar> = new BehaviorSubject({});
  selectedDates: Date[];
  shownDate: Date;
  countMonths: number;

  constructor() {}

  setSelectedDates(selectedDates: Date[]) {
    this.selectedDates = selectedDates;
  }

  setShownDate(date: Date) {
    this.shownDate = date;
  }

  private getCountMonths(viewMode: string | number): number {
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

  private getLastDate(viewMode: string | number): Date {
    let lastDate = this.shownDate
      ? new Date(this.shownDate)
      : this.selectedDates
      ? new Date(this.selectedDates[this.selectedDates.length - 1])
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

  getShownMonths(viewMode: string | number) {
    let countMonths = 0;
    const months = [];
    let lastDate: Date;

    lastDate = this.getLastDate(viewMode);
    countMonths = this.getCountMonths(viewMode);
    this.countMonths = countMonths;

    for (let i = countMonths - 1; i >= 0; i--) {
      months.push(this.getMonth(new Date(lastDate).adjustMonth(-i)));
    }

    this.calendar.next({
      id: 1,
      months
    });
  }

  goPrev(firstDate: Date) {
    let prevDate = new Date(firstDate);
    prevDate.setMonth(firstDate.getMonth() - 1);
    let month = this.getMonth(prevDate);
    let months = [...this.calendar.value.months];
    months.splice(months.length - 1, 1);
    months.unshift(month);
    this.calendar.next({
      id: 1,
      months
    });
  }

  goNext(lastDate: Date) {
    let nextDate = new Date(lastDate);
    nextDate.setMonth(lastDate.getMonth() + 1);
    let month = this.getMonth(nextDate);
    let months = [...this.calendar.value.months];
    months.splice(0, 1);
    months.push(month);
    this.calendar.next({
      id: 1,
      months
    });
  }

  onClickDay(dayClicked: Day) {
    this.selectedDates.push(dayClicked.date);

    this.calendar.next({
      months: [...this.calendar.value.months]
    });
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

  getMonth(date: Date) {
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const countWeek = Math.ceil((daysInMonth + date.getFirstDateDay()) / 7);
    const month: Month = {
      id: 1,
      date: date,
      weeks: []
    };
    for (let i = 0; i < countWeek; i++) {
      const startweekDate = new Date(date);
      startweekDate.setDate(date.getDate() + i * 7 - date.getDay());
      month.weeks.push(this.getWeek(startweekDate, date));
    }
    return month;
  }

  getWeek(date: Date /** first date in week */, monthFirstDate: Date) {
    const dayInWeek = 7;
    const dayInDate = date.getDay();
    const week: Week = {
      id: 1,
      days: []
    };

    for (let i = 0; i < dayInWeek; i++) {
      const curDate = new Date(date);
      curDate.setDate(curDate.getDate() + i);
      let isSelected = false;

      if (this.selectedDates) {
        for (let dateSelected of this.selectedDates) {
          if (dateSelected.getYmd() === curDate.getYmd()) {
            isSelected = true;
          }
        }
      }

      const day: Day = {
        id: 1,
        title: "",
        isDisabled:
          monthFirstDate.getMonth() === curDate.getMonth() &&
          monthFirstDate.getFullYear() === curDate.getFullYear()
            ? false
            : true,
        isWeekEnd: false,
        isSelected: isSelected,
        isHovered: false,
        template: "",
        date: curDate
      };
      week.days.push(day);
    }
    return week;
  }
}

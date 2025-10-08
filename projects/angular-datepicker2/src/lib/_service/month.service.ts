import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DateUtils } from "../_utils/date.utils";
import { CalendarService } from "./calendar.service";

@Injectable({
  providedIn: "root"
})
export class MonthService {

  constructor(private calendarService: CalendarService) { }

  getMonth(date: Date) {
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    let weekStart = this.calendarService.weekStart;
    const shouldShowPrevNext = this.calendarService.showPrevNextDaysInOneMonth && 
                               this.calendarService.getCountMonths() === 1;

    const countWeek = Math.ceil(
      (daysInMonth + DateUtils.getFirstDateDay(date, weekStart)) / 7
    );

    const weeks = [];
    for (let i = 0; i < countWeek; i++) {
      let dayOffset: number;
      
      if (shouldShowPrevNext) {
        // For the first week, start from the actual beginning of the week (might be in previous month)
        if (i === 0) {
          const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
          const firstDayWeekDay = DateUtils.getDayWithStart(firstDayOfMonth, weekStart);
          dayOffset = 1 - firstDayWeekDay;
        } else {
          // For subsequent weeks, add 7 days to the previous week
          dayOffset = (1 - DateUtils.getDayWithStart(new Date(date.getFullYear(), date.getMonth(), 1), weekStart)) + i * 7;
        }
      } else {
        // Original behavior
        dayOffset = date.getDate() + i * 7 - DateUtils.getDayWithStart(date, weekStart);
      }
      
      const startWeekDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        dayOffset,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      );
      weeks.push(startWeekDate);
    }

    return weeks;
  }
}

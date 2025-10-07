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

    const countWeek = Math.ceil(
      (daysInMonth + DateUtils.getFirstDateDay(date, weekStart)) / 7
    );

    const weeks = [];
    for (let i = 0; i < countWeek; i++) {
      // Use timezone-safe date creation
      const dayOffset = date.getDate() + i * 7 - DateUtils.getDayWithStart(date, weekStart);
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

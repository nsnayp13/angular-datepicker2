import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
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

    const weekStart = this.calendarService.weekStart;

    const countWeek = Math.ceil(
      (daysInMonth + date.getFirstDateDay(weekStart)) / 7
    );

    const weeks = [];
    for (let i = 0; i < countWeek; i++) {
      const startWeekDate = new Date(date);
      startWeekDate.setDate(
        date.getDate() + i * 7 - date.getDayWithStart(weekStart)
      );
      weeks.push(startWeekDate);
    }

    return weeks;
  }
}

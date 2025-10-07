import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WeekService {

  constructor() { }

  getWeek(date: Date) {
    const dayInWeek = 7;
    const days = [];

    for (let i = 0; i < dayInWeek; i++) {
      // Use timezone-safe date creation
      const curDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + i,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      );
      days.push(curDate);
    }

    return days;
  }
}

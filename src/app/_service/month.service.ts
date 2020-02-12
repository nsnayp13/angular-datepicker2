import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MonthService {
  weeks: BehaviorSubject<Date[] | null[]> = new BehaviorSubject([]);

  constructor() {}

  getMonth(date: Date) {
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    let startDay = 1;

    const countWeek = Math.ceil(
      (daysInMonth + date.getFirstDateDay(startDay)) / 7
    );
    const weeks = [];
    for (let i = 0; i < countWeek; i++) {
      const startWeekDate = new Date(date);
      startWeekDate.setDate(
        date.getDate() + i * 7 - date.getDayWithStart(startDay)
      );
      weeks.push(startWeekDate);
    }
    //console.log(weeks);
    this.weeks.next(weeks);
  }
}

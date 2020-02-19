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
      const curDate = new Date(date);
      curDate.setDate(curDate.getDate() + i);
      days.push(curDate);
    }

    return days;
  }
}

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WeekService {
  days: BehaviorSubject<Date[] | null[]> = new BehaviorSubject([]);

  constructor() {}

  getWeek(date: Date) {
    console.error(date.getFullYear());

    const dayInWeek = 7;
    //const dayInDate = date.getDay();
    const days = [];

    for (let i = 0; i < dayInWeek; i++) {
      const curDate = new Date(date);
      curDate.setDate(curDate.getDate() + i);
      // let isSelected = false;

      // if (this.selectedDates) {
      //   for (let dateSelected of this.selectedDates) {
      //     if (dateSelected.getYmd() === curDate.getYmd()) {
      //       isSelected = true;
      //     }
      //   }
      // }

      /* const day: Day = {
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
      };*/
      days.push(curDate);
    }
    this.days.next(days);
  }
}

import { Injectable } from "@angular/core";
import { Day, CalendarService } from "./calendar.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DayService {
  day: Day;
  constructor(private calendarService: CalendarService) {}

  createDay(date: Date) {
    this.day = {
      id: 1,
      title: "",
      isDisabled: false,
      isWeekEnd: false,
      isSelected: false,
      isHovered: false,
      template: "",
      date: date
    };

    return this.day;
  }

  getDay() {
    return this.day;
  }

  toggleDate() {
    if (!this.day.isSelected) {
      this.calendarService.addSelected(this.day.date);
    }
  }
}

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
    if (this.day.isSelected) {
      let selectedDates = this.calendarService.selectedDates.value.filter(
        elem => elem.getYmd() !== this.day.date.getYmd()
      );
      this.calendarService.selectedDates.next(selectedDates);
      //this.day.isSelected = false;
    } else {
      let selectedDates = this.calendarService.selectedDates.value;
      selectedDates.push(this.day.date);
      this.calendarService.selectedDates.next(selectedDates);
      //this.day.isSelected = true;
    }

    //this.calendarService.updateDate.next(new Date());
  }
}

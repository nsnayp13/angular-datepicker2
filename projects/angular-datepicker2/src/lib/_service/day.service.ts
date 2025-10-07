import { Injectable } from "@angular/core";
import { CalendarService } from "./calendar.service";
import { Day } from "../interfaces";
import { DateUtils } from "../_utils/date.utils";

@Injectable({
  providedIn: "root",
})
export class DayService {
  day: Day;
  constructor(private calendarService: CalendarService) {}

  private getIsDisabled(date: Date): boolean {
    const disabledDates = this.calendarService.disabledDates.value;
    if (!disabledDates) {
      return false;
    }
    if (
      disabledDates.dates &&
      disabledDates.dates.length > 0 &&
      DateUtils.isDateInArray(date, disabledDates.dates)
    ) {
      return true;
    }
    
    // Normalize dates for comparison (ignore time)
    const normalizedDate = DateUtils.normalizeToDay(date);
    
    if (disabledDates.after) {
      const normalizedAfter = DateUtils.normalizeToDay(disabledDates.after);
      if (normalizedAfter.getTime() < normalizedDate.getTime()) {
        return true;
      }
    }
    if (disabledDates.before) {
      const normalizedBefore = DateUtils.normalizeToDay(disabledDates.before);
      if (normalizedBefore.getTime() > normalizedDate.getTime()) {
        return true;
      }
    }
    return false;
  }

  createDay(date: Date): Day {
    this.day = {
      isDisabled: this.getIsDisabled(date),
      isWeekEnd: this.calendarService.weekends.includes(date.getDay()),
      isSelected: false,
      isHovered: false,
      isInPeriod: this.getIsInPeriod(date),
      date: date,
    };

    return this.day;
  }

  getIsInPeriod(date: Date): boolean {
    if (
      this.calendarService.selectMode === "period" &&
      this.calendarService.selectedDates.value.length == 2
    ) {
      // Normalize all dates for comparison (ignore time)
      const normalizedDate = DateUtils.normalizeToDay(date);
      const normalizedStart = DateUtils.normalizeToDay(this.calendarService.selectedDates.value[0]);
      const normalizedEnd = DateUtils.normalizeToDay(this.calendarService.selectedDates.value[1]);
      
      return (
        normalizedDate.getTime() >= normalizedStart.getTime() &&
        normalizedDate.getTime() <= normalizedEnd.getTime()
      );
    }
    return false;
  }

  getDay() {
    return this.day;
  }

  sortByDate(a, b) {
    if (a.getTime() > b.getTime()) return 1;
    if (a.getTime() == b.getTime()) return 0;
    if (a.getTime() < b.getTime()) return -1;
  }

  toggleDate() {
    console.log("clicked in service");

    this.calendarService.clickDayKey.next({
      key: new Date().getTime() + "" + Math.random(),
      day: this.day,
    });

    if (this.calendarService.selectMode === "single") {
      if (this.calendarService.selectedDates.value.length > 0) {
        this.calendarService.selectedDates.next([this.day.date]);
      }
    } else if (this.calendarService.selectMode === "multiple") {
      if (this.day.isSelected) {
        let selectedDates = this.calendarService.selectedDates.value.filter(
          (elem) => !DateUtils.isSameDay(elem, this.day.date)
        );
        selectedDates.sort(this.sortByDate);
        this.calendarService.selectedDates.next(selectedDates);
      } else {
        let selectedDates = this.calendarService.selectedDates.value;
        selectedDates.push(this.day.date);
        this.calendarService.selectedDates.next(selectedDates);
      }
    } else if (this.calendarService.selectMode === "period") {
      if (this.day.isSelected) {
        let selectedDates = this.calendarService.selectedDates.value.filter(
          (elem) => !DateUtils.isSameDay(elem, this.day.date)
        );
        this.calendarService.selectedDates.next(selectedDates);
      } else {
        if (this.calendarService.selectedDates.value.length == 2) {
          this.calendarService.selectedDates.next([this.day.date]);
        } else if (this.calendarService.selectedDates.value.length < 2) {
          let selectedDates = this.calendarService.selectedDates.value;
          selectedDates.push(this.day.date);

          selectedDates.sort(this.sortByDate);
          //console.log(selectedDates)

          this.calendarService.selectedDates.next(selectedDates);
        }
      }
    }
  }
}

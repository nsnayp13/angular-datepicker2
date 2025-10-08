import { Injectable } from "@angular/core";
import { CalendarService } from "./calendar.service";
import { Day } from "../interfaces";
import { DateUtils } from "../_utils/date.utils";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DayService {
  day!: Day;
  private subscriptions = new Subscription();
  
  constructor(private calendarService: CalendarService) {
    // Subscribe to weekends changes to update weekend status
    this.subscriptions.add(
      this.calendarService.weekendsSubject.subscribe(() => {
        // Trigger calendar recalculation when weekends change
        if (this.day && this.day.date) {
          this.updateWeekendStatus(this.day.date);
        }
      })
    );
  }

  private updateWeekendStatus(date: Date) {
    if (this.day) {
      this.day.isWeekEnd = this.calendarService.weekends.includes(date.getDay());
    }
  }

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
    
    // Use timezone-safe comparison methods
    if (disabledDates.after && DateUtils.isDayAfter(date, disabledDates.after)) {
      return true;
    }
    if (disabledDates.before && DateUtils.isDayBefore(date, disabledDates.before)) {
      return true;
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
      // Use timezone-safe comparison method
      return DateUtils.isDayBetween(
        date,
        this.calendarService.selectedDates.value[0],
        this.calendarService.selectedDates.value[1]
      );
    }
    return false;
  }

  getDay() {
    return this.day;
  }

  
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  sortByDate(a: Date, b: Date): number {
    if (a.getTime() > b.getTime()) return 1;
    if (a.getTime() == b.getTime()) return 0;
    if (a.getTime() < b.getTime()) return -1;
    return 0;
  }

  toggleDate() {
    console.log("clicked in service");

    this.calendarService.clickDayKey.next({
      key: new Date().getTime() + "" + Math.random(),
      day: this.day,
    });

    if (!this.day.date) return;
    
    if (this.calendarService.selectMode === "single") {
      if (this.calendarService.selectedDates.value.length > 0) {
        this.calendarService.selectedDates.next([this.day.date]);
      }
    } else if (this.calendarService.selectMode === "multiple") {
      if (this.day.isSelected) {
        let selectedDates = this.calendarService.selectedDates.value.filter(
          (elem) => !DateUtils.isSameDay(elem, this.day.date!)
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
          (elem) => !DateUtils.isSameDay(elem, this.day.date!)
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

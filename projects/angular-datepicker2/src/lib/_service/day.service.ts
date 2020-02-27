import { Injectable } from "@angular/core";
import { CalendarService } from "./calendar.service";
import { Day } from '../interfaces';
import { VirtualTimeScheduler } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DayService {
  day: Day;
  constructor(private calendarService: CalendarService) { }

  createDay(date: Date): Day {
    this.day = {
      id: 1,
      title: "",
      isDisabled: false,
      isWeekEnd: this.calendarService.weekends.includes(date.getDay()),
      isSelected: false,
      isHovered: false,
      isInPeriod: this.getIsInPeriod(date),
      date: date
    };

    return this.day;
  }

  getIsInPeriod(date: Date): boolean {


    if (this.calendarService.selectMode === 'period' && this.calendarService.selectedDates.value.length == 2 && date.getTime() >= this.calendarService.selectedDates.value[0].getTime() && date.getTime() <= this.calendarService.selectedDates.value[1].getTime()) {
      return true;
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


    this.calendarService.clickDayKey.next({ key: new Date().getYmd() + '' + Math.random(), day: this.day })

    if (this.calendarService.selectMode === 'single') {
      if (this.calendarService.selectedDates.value.length > 0) {
        this.calendarService.selectedDates.next([this.day.date]);
      }
    } else if (this.calendarService.selectMode === 'multiple') {
      if (this.day.isSelected) {
        let selectedDates = this.calendarService.selectedDates.value.filter(
          elem => elem.getYmd() !== this.day.date.getYmd()
        );
        selectedDates.sort(this.sortByDate);
        this.calendarService.selectedDates.next(selectedDates);

      } else {
        let selectedDates = this.calendarService.selectedDates.value;
        selectedDates.push(this.day.date);
        this.calendarService.selectedDates.next(selectedDates);
      }
    } else if (this.calendarService.selectMode === 'period') {
      if (this.day.isSelected) {
        let selectedDates = this.calendarService.selectedDates.value.filter(
          elem => elem.getYmd() !== this.day.date.getYmd()
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

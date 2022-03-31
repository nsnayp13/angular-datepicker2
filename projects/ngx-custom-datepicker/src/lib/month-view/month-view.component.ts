import { Component, OnInit, Input, HostBinding, Output, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CalendarService } from '../_service/calendar.service';
import { MonthService } from '../_service/month.service';
import { Subscription } from 'rxjs';
import { DayDirective } from '../day.directive';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss'],
  providers: [MonthService]
})
export class MonthViewComponent implements OnInit, OnDestroy {
  @Input() date: Date;
  @Input() updateDate;
  @Input() dayDirectives: DayDirective[];

  @Output() @HostBinding('style') elWidth: number;
  @ViewChild('wrap', { static: true }) elementView: ElementRef;

  weeks: Date[] | null[];
  animationStep;
  weekDays: Date[];
  sub: Subscription = new Subscription();

  constructor(private monthService: MonthService, private calendarService: CalendarService) {}

  showYears() {
    this.calendarService.getShownYears(this.date);
  }

  ngOnInit() {
    this.sub.add(
      this.calendarService.animationStep.subscribe((data) => {
        this.animationStep = data;
      })
    );
    this.weeks = this.monthService.getMonth(this.date);

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(this.weeks[0].adjustDate(i));
    }
    this.weekDays = weekDays;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getWeekDayDirectives(weekStartDate: Date): DayDirective[] {
    weekStartDate.setHours(0, 0, 0, 0);
    const weekEndDate = new Date(weekStartDate);
    weekEndDate.setDate(weekStartDate.getDate() + 7);
    weekEndDate.setHours(0, 0, 0, 0);
    const directives = this.dayDirectives.filter(
      (directive) =>
        directive.date.getTime() >= weekStartDate.getTime() && directive.date.getTime() < weekEndDate.getTime()
    );
    return directives;
  }
}

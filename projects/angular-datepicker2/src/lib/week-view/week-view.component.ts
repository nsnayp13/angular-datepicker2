import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DayDirective } from "../day.directive";
import { WeekService } from "../_service/week.service";
import { DayViewComponent } from "../day-view/day-view.component";
import { DateUtils } from "../_utils/date.utils";
import { CalendarService } from "../_service/calendar.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-week-view",
  standalone: true,
  imports: [CommonModule, DayViewComponent],
  templateUrl: "./week-view.component.html",
  styleUrls: ["./week-view.component.scss"],
  providers: [WeekService],
})
export class WeekViewComponent implements OnInit, OnDestroy {
  @Input() date!: Date;
  @Input() firstMonthDate!: Date;
  @Input() dayDirectives!: DayDirective[];
  dates: (Date | null)[] = [];
  private subscriptions = new Subscription();
  
  constructor(
    private weekService: WeekService, 
    private calendarService: CalendarService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.dates = this.weekService.getWeek(this.date);
    
    // Subscribe to calendar updates to trigger change detection
    this.subscriptions.add(
      this.calendarService.updateDate.subscribe(() => {
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getDayDirective(date: Date | null): DayDirective | undefined {
    if (!date) return undefined;
    let day = this.dayDirectives.find(
      (directive: DayDirective) => directive.date && DateUtils.isSameDay(directive.date, date)
    );
    return day;
  }

  shouldShowPrevNextDays(): boolean {
    return this.calendarService.showPrevNextDaysInOneMonth && 
           this.calendarService.getCountMonths() === 1;
  }
}

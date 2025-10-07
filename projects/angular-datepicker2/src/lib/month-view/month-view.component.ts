import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarService } from "../_service/calendar.service";
import { MonthService } from "../_service/month.service";
import { Subscription } from "rxjs";
import { DayDirective } from "../day.directive";
import { WeekViewComponent } from "../week-view/week-view.component";
import { DateUtils } from "../_utils/date.utils";

@Component({
  selector: "app-month-view",
  standalone: true,
  imports: [CommonModule, WeekViewComponent],
  templateUrl: "./month-view.component.html",
  styleUrls: ["./month-view.component.scss"],
  providers: [MonthService],
})
export class MonthViewComponent implements OnInit, OnDestroy {
  @Input() date: Date;
  @Input() updateDate;
  @Input() vertical: boolean;
  @Input() dayDirectives: DayDirective[];

  @Output() @HostBinding("style") elWidth: number;
  @ViewChild("wrap", { static: true }) elementView: ElementRef;

  weeks: Date[] | null[];
  animationStep;
  weekDays: Date[];
  sub: Subscription = new Subscription();

  constructor(
    private monthService: MonthService,
    private calendarService: CalendarService
  ) {}

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

    let weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(DateUtils.adjustDate(this.weeks[0] as Date, i));
    }
    this.weekDays = weekDays;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getWeekDayDirectives(weekStartDate: Date): DayDirective[] {
    const normalizedWeekStart = DateUtils.normalizeToDay(weekStartDate);
    const weekEndDate = new Date(normalizedWeekStart);
    weekEndDate.setDate(normalizedWeekStart.getDate() + 7);
    
    let directives = this.dayDirectives.filter(
      (directive) => {
        const normalizedDirectiveDate = DateUtils.normalizeToDay(directive.date);
        return (
          normalizedDirectiveDate.getTime() >= normalizedWeekStart.getTime() &&
          normalizedDirectiveDate.getTime() < weekEndDate.getTime()
        );
      }
    );
    return directives;
  }
}

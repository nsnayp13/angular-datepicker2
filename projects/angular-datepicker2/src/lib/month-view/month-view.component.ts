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
  @Input() date!: Date;
  @Input() updateDate: any;
  @Input() vertical!: boolean;
  @Input() dayDirectives!: DayDirective[];

  @Output() @HostBinding("style") elWidth!: number;
  @ViewChild("wrap", { static: true }) elementView!: ElementRef;

  weeks: (Date | null)[] = [];
  animationStep: any;
  weekDays: Date[] = [];
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
    // Create end date using timezone-safe method
    const weekEndDate = DateUtils.adjustDate(weekStartDate, 7);
    
    let directives = this.dayDirectives.filter(
      (directive) => {
        // Use timezone-safe comparison: date >= start AND date < end
        return directive.date && (
          DateUtils.compareDays(directive.date, weekStartDate) >= 0 &&
          DateUtils.compareDays(directive.date, weekEndDate) < 0
        );
      }
    );
    return directives;
  }
}

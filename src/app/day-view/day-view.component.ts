import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  OnDestroy
} from "@angular/core";
import { Day, CalendarService } from "../_service/calendar.service";
import { DayService } from "../_service/day.service";
import { filter } from "minimatch";
import { pipe, Subscription } from "rxjs";

@Component({
  selector: "app-day-view",
  templateUrl: "./day-view.component.html",
  styleUrls: ["./day-view.component.scss"],
  providers: [DayService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayViewComponent implements OnInit, OnChanges, OnDestroy {
  @Input() date: Date;
  @Input() thisMonth: boolean;
  day: Day;
  sub: Subscription;

  constructor(
    private dayService: DayService,
    private calendarService: CalendarService
  ) {}

  // bad idea, too mach subscribes for every day
  ngOnInit() {
    this.day = this.dayService.createDay(this.date);
    this.sub = this.calendarService.selectedDates.subscribe(data => {
      const days = data.map(item => item.getYmd());
      this.day.isSelected = days.includes(this.day.date.getYmd());
    });
  }

  detectChanges() {}

  ngOnChanges() {
    console.log("Day changed");
  }

  onClick() {
    console.log(this.day, this.calendarService.selectedDates.value);
    this.dayService.toggleDate();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

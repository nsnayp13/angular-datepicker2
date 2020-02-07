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

  ngOnInit() {
    // console.log("Day-view onInit");
    //this.dayService.day.subscribe(data => (this.day = data));
    this.day = this.dayService.createDay(this.date);

    this.sub = this.calendarService.selectedDates.subscribe(data => {
      console.log("selectedDates changed");
      for (let k in data) {
        if (data[k].getYmd() === this.day.date.getYmd()) {
          this.day.isSelected = true;
        }
      }
    });
  }

  ngOnChanges() {}

  onClick() {
    this.dayService.toggleDate();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

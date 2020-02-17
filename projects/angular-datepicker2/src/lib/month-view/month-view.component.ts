import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  ViewChild,
  ElementRef,
  OnDestroy
} from "@angular/core";
import { CalendarService } from "../_service/calendar.service";
import { MonthService } from "../_service/month.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-month-view",
  templateUrl: "./month-view.component.html",
  styleUrls: ["./month-view.component.scss"],
  providers: [MonthService]
})
export class MonthViewComponent implements OnInit, OnDestroy {
  @Input() date: Date;
  @Input() updateDate;
  @Input() vertical: boolean;
  @Output() @HostBinding("style") elWidth: number;
  @ViewChild("wrap", { static: true }) elementView: ElementRef;

  weeks: Date[] | null[];
  animationStep;
  weekDays: Date[];
  sub: Subscription = new Subscription();

  constructor(
    private monthService: MonthService,
    private calendarService: CalendarService
  ) { }

  showYears() {
    this.calendarService.getShownYears(this.date);
  }

  ngOnInit() {
    this.sub.add(this.calendarService.animationStep.subscribe(data => {
      this.animationStep = data;
    }));
    this.monthService.getMonth(this.date);
    this.sub.add(this.monthService.weeks.subscribe(data => {
      let weekDays = [];
      for (let i = 0; i < 7; i++) {
        weekDays.push(data[0].adjustDate(i));
      }
      this.weekDays = weekDays;
      this.weeks = data;
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

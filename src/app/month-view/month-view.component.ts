import {
  Component,
  OnInit,
  Input,
  OnChanges,
  HostBinding,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Month, CalendarService } from "../_service/calendar.service";
import { MonthService } from "../_service/month.service";

@Component({
  selector: "app-month-view",
  templateUrl: "./month-view.component.html",
  styleUrls: ["./month-view.component.scss"],
  providers: [MonthService]
})
export class MonthViewComponent implements OnInit, OnChanges {
  @Input() date: Date;
  weeks: Date[] | null[];

  @Input() updateDate;
  @Input() vertical: boolean;
  animationStep;
  weekDays: Date[];

  @Output() @HostBinding("style") elWidth: number;
  @ViewChild("wrap", { static: true }) elementView: ElementRef;

  constructor(
    private monthService: MonthService,
    private calendarService: CalendarService
  ) {}

  showYears() {
    this.calendarService.getShownYears(this.date);
  }

  ngOnInit() {
    //console.log("Month-view onInit");

    this.calendarService.animationStep.subscribe(data => {
      this.animationStep = data;
    });
    this.monthService.getMonth(this.date);
    this.monthService.weeks.subscribe(data => {
      let weekDays = [];
      for (let i = 0; i < 7; i++) {
        weekDays.push(data[0].adjustDate(i));
      }
      this.weekDays = weekDays;
      this.weeks = data;
    });
  }

  ngOnChanges() {
    console.log(this.elementView.nativeElement.width);
    //console.log("Month-view ngOnChanges");
  }
}

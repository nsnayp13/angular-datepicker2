import { Component, OnInit, Input } from "@angular/core";
import { DayDirective } from "../day.directive";
import { WeekService } from "../_service/week.service";

@Component({
  selector: "app-week-view",
  templateUrl: "./week-view.component.html",
  styleUrls: ["./week-view.component.scss"],
  providers: [WeekService],
})
export class WeekViewComponent implements OnInit {
  @Input() date: Date;
  @Input() firstMonthDate: Date;
  @Input() dayDirectives: DayDirective[];
  dates: Date[] | null[];
  constructor(private weekService: WeekService) {}

  ngOnInit() {
    this.dates = this.weekService.getWeek(this.date);
    console.log("onInit weekView this.dayDirectives", this.dayDirectives);
  }

  getDayDirective(date: Date): DayDirective {
    let day = this.dayDirectives.find(
      (directive: DayDirective) => directive.date.getTime() === date.getTime()
    );
    return day;
  }
}

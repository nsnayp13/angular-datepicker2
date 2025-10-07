import { Component, OnInit, Input } from "@angular/core";
import { DayDirective } from "../day.directive";
import { WeekService } from "../_service/week.service";
import { DayViewComponent } from "../day-view/day-view.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-week-view",
  templateUrl: "./week-view.component.html",
  styleUrls: ["./week-view.component.scss"],
  providers: [WeekService],
  standalone: true,
  imports: [CommonModule, DayViewComponent],
})
export class WeekViewComponent implements OnInit {
  @Input() date: Date;
  @Input() firstMonthDate: Date;
  @Input() dayDirectives: DayDirective[];
  dates: Date[] | null[];
  constructor(private weekService: WeekService) {}

  ngOnInit() {
    this.dates = this.weekService.getWeek(this.date);
  }

  getDayDirective(date: Date): DayDirective {
    let day = this.dayDirectives.find(
      (directive: DayDirective) => directive.date.getTime() === date.getTime()
    );
    return day;
  }
}

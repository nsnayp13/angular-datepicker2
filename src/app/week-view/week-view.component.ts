import { Component, OnInit, Input } from "@angular/core";
import { WeekService } from "../_service/week.service";

@Component({
  selector: "app-week-view",
  templateUrl: "./week-view.component.html",
  styleUrls: ["./week-view.component.scss"],
  providers: [WeekService]
})
export class WeekViewComponent implements OnInit {
  @Input() date: Date;
  @Input() firstMonthDate: Date;
  days: Date[] | null[];
  constructor(private weekService: WeekService) {}

  ngOnInit() {
    this.weekService.getWeek(this.date);
    this.weekService.days.subscribe(data => {
      this.days = data;
      console.log("WEEk DAYS", this.days.length, this.days);
    });
  }
}

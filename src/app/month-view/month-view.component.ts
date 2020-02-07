import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Month } from "../_service/calendar.service";
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

  constructor(private monthService: MonthService) {}

  ngOnInit() {
    // console.log("Month-view onInit");

    this.monthService.getMonth(this.date);
    this.monthService.weeks.subscribe(data => {
      this.weeks = data;
      console.log("MONTH WEEKS", this.weeks);
    });
  }

  ngOnChanges() {}
}

import { Component, OnInit, Input } from "@angular/core";
import { Month } from "../calendar.service";

@Component({
  selector: "app-month-view",
  templateUrl: "./month-view.component.html",
  styleUrls: ["./month-view.component.scss"]
})
export class MonthViewComponent implements OnInit {
  @Input() month: Month;

  constructor() {}

  ngOnInit() {
    console.log("Month-view onInit");
  }
}

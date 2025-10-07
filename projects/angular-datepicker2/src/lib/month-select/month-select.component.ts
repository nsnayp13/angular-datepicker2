import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { CalendarService } from "../_service/calendar.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-month-select",
  templateUrl: "./month-select.component.html",
  styleUrls: ["./month-select.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class MonthSelectComponent implements OnInit {
  constructor(private calendarService: CalendarService) { }

  @Input() date: Date;
  @ViewChild("wrap", { static: true }) elementView: ElementRef;
  months = [];
  animationStep;

  ngOnInit() {
    for (let i = 0; i < 12; i++) {
      let date = new Date(this.date);
      date.setMonth(0);
      date.adjustMonth(i);
      this.months.push(date);
    }

    this.calendarService.animationStep.subscribe(data => {
      this.animationStep = data;
    });
  }

  setMonth(month: Date) {
    this.calendarService.getShownMonths(month);
  }
}

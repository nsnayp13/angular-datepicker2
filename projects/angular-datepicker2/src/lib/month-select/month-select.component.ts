import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarService } from "../_service/calendar.service";
import { DateUtils } from "../_utils/date.utils";

@Component({
  selector: "app-month-select",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./month-select.component.html",
  styleUrls: ["./month-select.component.scss"]
})
export class MonthSelectComponent implements OnInit {
  constructor(private calendarService: CalendarService) { }

  @Input() date!: Date;
  @ViewChild("wrap", { static: true }) elementView!: ElementRef;
  months: Date[] = [];
  animationStep: any;

  ngOnInit() {
    for (let i = 0; i < 12; i++) {
      // Use timezone-safe date creation
      const date = new Date(this.date.getFullYear(), i, 1);
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

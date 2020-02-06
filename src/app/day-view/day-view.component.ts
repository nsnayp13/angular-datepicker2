import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges
} from "@angular/core";
import { Day, CalendarService } from "../calendar.service";

@Component({
  selector: "app-day-view",
  templateUrl: "./day-view.component.html",
  styleUrls: ["./day-view.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayViewComponent implements OnInit, OnChanges {
  @Input() day: Day;
  @Input() isSelected: boolean;

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    console.log("Day-view onInit");
  }

  ngOnChanges() {
    console.log("Day-view ngOnChanges");
  }

  onClick() {
    this.calendarService.onClickDay(this.day);
    // console.log(this.day);
    // this.day.isSelected = !this.day.isSelected;
  }
}

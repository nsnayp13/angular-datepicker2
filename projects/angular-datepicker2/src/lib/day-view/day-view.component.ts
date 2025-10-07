import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarService } from "../_service/calendar.service";
import { DayService } from "../_service/day.service";
import { Subscription } from "rxjs";
import { DayDirective } from "../day.directive";

@Component({
  selector: "app-day-view",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./day-view.component.html",
  styleUrls: ["./day-view.component.scss"],
  providers: [DayService],
})
export class DayViewComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() date: Date;
  @Input() thisMonth: boolean;
  @Input() dayDirective: DayDirective;
  @ViewChild("tpl", { static: false, read: ViewContainerRef })
  template: ViewContainerRef;
  sub: Subscription;
  sub1: Subscription;

  constructor(
    public dayService: DayService,
    private calendarService: CalendarService
  ) {}

  createChildComponent() {
    let viewContainerRef = this.template;
    viewContainerRef.clear();
    viewContainerRef.createEmbeddedView(
      (this.dayDirective as any).template,
      (this.dayDirective as any).context
    );
  }

  isStartOrEndDatePeriod() {
    if (this.getSelectMode() === "period") {
      if (this.getSelectedDates().length == 2) {
        if (this.date.getYmd() === this.getSelectedDates()[0].getYmd()) {
          return "start";
        } else if (this.date.getYmd() === this.getSelectedDates()[1].getYmd()) {
          return "end";
        }
      }
    }
    return false;
  }

  getSelectedDates() {
    return this.calendarService.selectedDates.value;
  }

  getSelectMode() {
    return this.calendarService.selectMode;
  }

  ngAfterViewInit() {
    if (this.dayDirective && this.template) {
      this.createChildComponent();
    }
  }

  // bad idea, too mach subscribes for every day
  ngOnInit() {
    this.dayService.createDay(this.date);
    this.sub = this.calendarService.selectedDates.subscribe((data) => {
      const days = data.map((item) => item.getYmd());
      this.dayService.day.isSelected = days.includes(
        this.dayService.day.date.getYmd()
      );
      this.dayService.day.isInPeriod = this.dayService.getIsInPeriod(
        this.dayService.day.date
      );
    });
  }

  detectChanges() {}

  ngOnChanges() {
    if (this.dayDirective && this.template) {
      this.createChildComponent();
    }
  }

  onClick() {
    !this.dayService.day.isDisabled ? this.dayService.toggleDate() : null;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

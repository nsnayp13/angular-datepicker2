import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  TemplateRef,
  ElementRef,
  ComponentRef,
  Type
} from "@angular/core";
import { Day, CalendarService } from "../_service/calendar.service";
import { DayService } from "../_service/day.service";
import { Subscription } from "rxjs";


@Component({
  selector: "app-day-view",
  templateUrl: "./day-view.component.html",
  styleUrls: ["./day-view.component.scss"],
  providers: [DayService],

})
export class DayViewComponent implements OnInit, OnChanges, OnDestroy {
  @Input() date: Date;
  @Input() thisMonth: boolean;
  day: Day;
  sub: Subscription;
  sub1: Subscription;

  @ViewChild("tpl", { static: false, read: ViewContainerRef }) template;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dayService: DayService,
    private calendarService: CalendarService
  ) { }

  createChildComponent(component, props) {
    let factory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    let viewContainerRef = this.template;
    viewContainerRef.clear();
    let childComponentRef = viewContainerRef.createComponent(factory);

    for (let k of Object.keys(props)) {
      let prop = props[k];
      if (prop.type === 'output') {
        (childComponentRef.instance)[k].subscribe(data => {
          prop.value(data)
        })
      } else if (prop.type === 'input') {
        (childComponentRef.instance)[k] = prop.value;
      }


    }
  }

  ngAfterViewInit() {
    if (this.day.template && this.day.template.component) {
      this.createChildComponent(
        this.day.template.component,
        this.day.template.props
      );
    }
  }

  // bad idea, too mach subscribes for every day
  ngOnInit() {
    this.day = this.dayService.createDay(this.date);

    this.sub = this.calendarService.selectedDates.subscribe(data => {
      const days = data.map(item => item.getYmd());
      this.day.isSelected = days.includes(this.day.date.getYmd());
    });

    this.sub1 = this.calendarService.days.subscribe(data => {
      //console.log(data);
      if (data && data.length > 0) {
        let day = data.find(item => item.date.getYmd() == this.date.getYmd());
        day ? (this.day = day) : null;
      }
    });
  }

  detectChanges() { }

  ngOnChanges() {
    //console.log("Day changed");
  }

  onClick() {
    //console.log(this.day, this.calendarService.selectedDates.value);
    this.dayService.toggleDate();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }
}

import {
  ViewContainerRef,
  Directive,
  Input,
  TemplateRef,
  AfterContentInit,
  AfterViewInit,
} from "@angular/core";

@Directive({
  selector: "[day]",
  //providers: [TemplateRef],
})
export class DayDirective implements AfterContentInit, AfterViewInit {
  context: any | null = null;
  __created = false;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  @Input("dayFrom") date: Date;

  @Input() set day(date: Date) {
    this.context = {
      $implicit: this.date,
    };
  }

  __create() {
    if (!this.__created && this.template) {
      this.container.createEmbeddedView(this.template, this.context);
      this.__created = true;
    }
  }

  ngOnInit() {
    this.context = {
      $implicit: this.date,
      date: this.date,
    };
    this.__create();
  }

  ngAfterContentInit() {
    this.__create();
  }

  ngAfterViewInit() {
    this.__create();
  }
}

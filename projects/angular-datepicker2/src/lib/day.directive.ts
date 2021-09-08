import { ViewContainerRef, Directive, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: "[day]",
})
export class DayDirective {
  context: any | null = null;

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
  ngOnInit() {
    this.context = {
      $implicit: this.date,
      date: this.date,
    };
    this.container.createEmbeddedView(this.template, this.context);
  }
}

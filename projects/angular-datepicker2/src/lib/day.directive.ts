import { ViewContainerRef, Directive, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: "[ad2day]",
  //providers: [TemplateRef],
})
export class DayDirective {
  context: any | null = null;
  __created = false;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  @Input("ad2dayFrom") date: Date;

  @Input() set day(date: Date) {
    this.context = {
      $implicit: date,
    };
  }

  ngOnInit() {
    this.context = {
      $implicit: this.date,
      date: this.date,
    };
  }
}

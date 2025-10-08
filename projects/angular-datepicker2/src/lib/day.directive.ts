import { ViewContainerRef, Directive, Input, TemplateRef, OnInit } from "@angular/core";

@Directive({
  selector: "[ad2day]",
  standalone: true,
  //providers: [TemplateRef],
})
export class DayDirective implements OnInit {
  context: any | null = null;
  __created = false;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  @Input("ad2dayFrom") date: Date | undefined;

  @Input() set day(date: Date) {
    this.context = {
      $implicit: date,
    };
  }

  ngOnInit() {
    if (this.date) {
      this.context = {
        $implicit: this.date,
        date: this.date,
      };
    }
  }
}

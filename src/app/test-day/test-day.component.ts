import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-test-day",
  templateUrl: "./test-day.component.html",
  styleUrls: ["./test-day.component.scss"],
})
export class TestDayComponent implements OnInit {
  @Input() title: any;
  @Input() isInPeriod: boolean;
  @Input() callback;
  @Output() callback2: EventEmitter<any> = new EventEmitter();

  constructor() {}

  click(event) {
    this.callback2.emit(this);
  }

  ngOnInit() {}
}

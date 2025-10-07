import { Component, OnInit } from '@angular/core';
import { MonthSelectComponent } from "../month-select/month-select.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-year-select',
  templateUrl: './year-select.component.html',
  styleUrls: ['./year-select.component.scss'],
  standalone: true,
  imports: [CommonModule, MonthSelectComponent],
})
export class YearSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

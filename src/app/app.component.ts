import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import localeEn from "@angular/common/locales/en";
import {
  Calendar,
  Day,
  SelectMode,
  ViewMode,
  Suggest,
  DisabledDates,
  AngularDatepicker2,
} from "projects/angular-datepicker2/src/public-api";

registerLocaleData(localeEn, "en");

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FormsModule, AngularDatepicker2],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "angular-datepicker";
  date: Date;
  selectedDates: Date[];

  lol: Calendar;
  days: Day[];

  dates: Date[] = [];

  vertical = false;
  selectMode: SelectMode = SelectMode.Period;
  viewMode: ViewMode | number = ViewMode.Quarter;

  disabledDates: DisabledDates;

  suggest = [
    {
      title: "Last two weeks",
      selectMode: SelectMode.Period,
      selectedDates: [
        new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 14
        ),
        new Date(),
      ],
    },
    {
      title: "Last month",
      selectMode: SelectMode.Period,
      selectedDates: [
        new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          new Date().getDate()
        ),
        new Date(),
      ],
    },
    {
      title: "1, 4 and 30",
      selectMode: SelectMode.Multiple,
      selectedDates: [
        new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        new Date(new Date().getFullYear(), new Date().getMonth(), 4),
        new Date(new Date().getFullYear(), new Date().getMonth(), 30),
      ],
    },
  ];

  _stackOnDayClick = [];

  _viewModeVal = [ViewMode.Quarter, 1, 3, 4, ViewMode.Semester, 6];

  _selectModeVal = [SelectMode.Period, SelectMode.Multiple, SelectMode.Single];

  _verticalVal = [false, true];

  _shownDateVal = [new Date()];

  _selectMode(e) {
    let val = e.target.value;
    this.selectMode = val;
  }

  _viewMode(e) {
    let val = e.target.value;
    if (typeof val === "string" && val.length <= 2) {
      val = parseInt(val);
    }
    this.viewMode = val;
  }

  _vertical(e) {
    let val = e.target.value;
    this.vertical = val === "true" ? true : false;
  }

  onDayClick(day) {
    this._stackOnDayClick.push({ ...day });
  }

  constructor() {}

  ngOnInit(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const disabledBefore = new Date(today);
    disabledBefore.setDate(disabledBefore.getDate() - 50);

    const disabledAfter = new Date(today);
    disabledAfter.setDate(disabledAfter.getDate() + 15);

    this.disabledDates = {
      before: disabledBefore,
      //after: disabledAfter,
    };

    this.selectedDates = [
      new Date(new Date().getFullYear(), new Date().getMonth(), 2),
      new Date(new Date().getFullYear(), new Date().getMonth(), 11),
    ];
    this.date = new Date(new Date().getFullYear(), new Date().getMonth(), 7);

    //setTimeout(() => {
    this.days = [
      {
        isDisabled: true,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 2),
      },
      {
        isDisabled: false,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 30),
      },
      {
        isDisabled: false,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 5),
      },
      {
        isDisabled: false,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 6),
      },
    ];
    //}, 2000);
  }
}

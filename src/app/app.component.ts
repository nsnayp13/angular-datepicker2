import { Component, OnInit } from '@angular/core';
import { Calendar, Day, SelectMode, ViewMode, DisabledDates } from 'projects/ngx-custom-datepicker/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-custom-datepicker';
  date: Date;
  selectedDates: Date[];

  lol: Calendar;
  days: Day[];

  dates: Date[] = [];

  selectMode: SelectMode = SelectMode.Period;
  viewMode: ViewMode | number = ViewMode.Quarter;

  disabledDates: DisabledDates;

  _stackOnDayClick = [];

  _viewModeVal = [ViewMode.Quarter, 1, 3, 4, ViewMode.Semester, 6];

  _selectModeVal = [SelectMode.Period, SelectMode.Multiple, SelectMode.Single];

  _verticalVal = [false, true];

  _shownDateVal = [new Date()];

  _selectMode(e) {
    const val = e.target.value;
    this.selectMode = val;
  }

  _viewMode(e) {
    let val = e.target.value;
    if (typeof val === 'string' && val.length <= 2) {
      val = parseInt(val);
    }
    this.viewMode = val;
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
      before: disabledBefore
      //after: disabledAfter,
    };

    this.selectedDates = [
      new Date(new Date().getFullYear(), new Date().getMonth(), 2),
      new Date(new Date().getFullYear(), new Date().getMonth(), 11)
    ];
    this.date = new Date(new Date().getFullYear(), new Date().getMonth(), 7);

    //setTimeout(() => {
    this.days = [
      {
        isDisabled: true,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 2)
      },
      {
        isDisabled: false,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 30)
      },
      {
        isDisabled: false,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 5)
      },
      {
        isDisabled: false,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 6)
      }
    ];
    //}, 2000);
  }
}

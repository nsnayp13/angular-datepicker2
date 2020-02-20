import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TestDayComponent } from "./test-day/test-day.component";
import { Calendar, Day, SelectMode, ViewMode } from 'projects/angular-datepicker2/src/public-api';
//import {  } from 'projects/angular-datepicker2/src/lib/interfaces';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  //changeDetection: ChangeDetectionStrategy
})
export class AppComponent implements OnInit {
  title = "angular-datepicker";
  date: Date;
  selectedDates: Date[];

  lol: Calendar
  days: Day[];
  vertical = false;
  selectMode: SelectMode = SelectMode.Period
  viewMode: ViewMode | number = ViewMode.Quarter


  _viewModeVal = [
    ViewMode.Quarter,
    1,
    3,
    4,
    ViewMode.Semester,
    6
  ];

  _selectModeVal = [
    SelectMode.Period,
    SelectMode.Multiple,
    SelectMode.Single
  ];


  _verticalVal = [
    false,
    true
  ]

  _shownDateVal = [new Date(2020, 3, 1)];


  _selectMode(e) {
    let val = e.target.value
    this.selectMode = val;
  }

  _viewMode(e) {
    let val = e.target.value
    if (typeof val === 'string' && val.length <= 2) {
      val = parseInt(val)
    }
    this.viewMode = val;
  }

  _vertical(e) {
    let val = e.target.value;
    this.vertical = (val === 'true') ? true : false;
  }



  ngOnInit(): void {
    this.selectedDates = [
      new Date(2020, 3, 7),
      new Date(2020, 3, 9),

    ];
    this.date = new Date(2020, 3, 7);

    /* setTimeout(() => {
       this.vertical = true;
     }, 2000)
     setTimeout(() => {
       this.viewMode = ViewMode.Quarter;
     }, 4000)
 
     setTimeout(() => {
       this.selectMode = SelectMode.Multiple;
     }, 6000)*/



    this.days = [
      {
        title: "",
        isDisabled: true,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(2020, 3, 23),

      },
      {
        title: "",
        isDisabled: false,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(2020, 3, 21),

      },


      {
        title: "",
        isDisabled: true,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(2020, 3, 26),
        template: {
          component: TestDayComponent,
          props: {
            title: {
              type: 'input',
              value: new Date(2020, 3, 26).getDate()
            },
            callback2: {
              type: 'output',
              value: (data) => {
                console.log(data);
              }
            },

          }
        }
      }
    ];
  }
}


import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TestDayComponent } from "./test-day/test-day.component";
import { Calendar, Day, SelectMode, ViewMode, Suggest } from 'projects/angular-datepicker2/src/public-api';
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

  suggest = [
    {
      title: 'Last two weeks',
      selectMode: SelectMode.Period,
      selectedDates: [
        new Date(2020, 3, 1),
        new Date(2020, 3, 12),
      ]
    },
    {
      title: 'Last month',
      selectMode: SelectMode.Period,
      selectedDates: [
        new Date(2020, 3, 1),
        new Date(2020, 3, 30),
      ]
    },
    {
      title: '1, 4 and 30',
      selectMode: SelectMode.Multiple,
      selectedDates: [
        new Date(2020, 3, 1),
        new Date(2020, 3, 4),
        new Date(2020, 3, 30),
      ]
    }
  ]



  _stackOnDayClick = [];

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





  onDayClick(day) {
    this._stackOnDayClick.push({ ...day })
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
        isDisabled: true,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(2020, 3, 23),


      },
      {
        isDisabled: false,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(2020, 3, 21),

      },


      {
        isDisabled: true,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(2020, 3, 26),
        template: {
          component:
          {
            componentClass: TestDayComponent,
            props: [
              {
                propName: 'title',
                type: 'input',
                value: new Date(2020, 3, 26).getDate()
              },
              {
                propName: 'callback2',
                type: 'output',
                value: (data) => {
                  alert('click custom day. See Day interface')
                }
              }
            ]
          }


        }
      }
    ];
  }
}


import { Component, OnInit } from "@angular/core";
import { TestDayComponent } from "./test-day/test-day.component";
import { Calendar, Day } from 'projects/angular-datepicker2/src/public-api';



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-datepicker";
  date: Date;
  selectedDates: Date[];

  lol: Calendar
  days: Day[];

  ngOnInit(): void {
    this.selectedDates = [
      new Date(2020, 3, 7),
      new Date(2020, 3, 9),

    ];
    this.date = new Date(2020, 3, 7);

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


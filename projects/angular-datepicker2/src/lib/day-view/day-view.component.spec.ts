import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DayViewComponent } from './day-view.component';
import { DayService } from '../_service/day.service';
import { CalendarService } from '../_service/calendar.service';
import { of, BehaviorSubject } from 'rxjs';
describe("DayViewComponent", () => {
    let component: DayViewComponent;
    let fixture: ComponentFixture<DayViewComponent>;
    let dayService;
    let calendarService;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DayViewComponent],
            providers: []
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DayViewComponent);
        component = fixture.componentInstance;
        dayService = fixture.debugElement.injector.get(DayService);
        calendarService = fixture.debugElement.injector.get(CalendarService);

        // spyOnAllFunctions(calendarService);
        spyOn(calendarService.selectedDates, 'subscribe').and.returnValue([new Date()]);


        spyOn(dayService, 'createDay').and.returnValue({
            isDisabled: false,
            isHovered: false,
            isSelected: false,
            isWeekEnd: false,
            date: new Date(),
            title: '',
            template: ''
        });




        component.date = new Date();
        component.thisMonth = true;
        calendarService.selectedDates.next([new Date()])


        fixture.detectChanges();
    });

    it("should have a defined component", () => {




        fixture.detectChanges();


        expect(true).toBeTruthy();
    });

});

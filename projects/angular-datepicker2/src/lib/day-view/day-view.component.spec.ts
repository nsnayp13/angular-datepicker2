import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DayViewComponent } from './day-view.component';
import { DayService } from '../_service/day.service';
import { CalendarService } from '../_service/calendar.service';
import { DateUtils } from '../_utils/date.utils';
import { BehaviorSubject } from 'rxjs';

describe("DayViewComponent", () => {
    let component: DayViewComponent;
    let fixture: ComponentFixture<DayViewComponent>;
    let dayService: DayService;
    let calendarService: CalendarService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DayViewComponent],
            providers: [DayService, CalendarService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DayViewComponent);
        component = fixture.componentInstance;
        dayService = TestBed.inject(DayService);
        calendarService = TestBed.inject(CalendarService);

        component.date = new Date(2024, 3, 15);
        component.thisMonth = true;
        
        fixture.detectChanges();
    });

    it("should create component", () => {
        expect(component).toBeTruthy();
    });

    it("should initialize with correct date", () => {
        expect(component.date).toEqual(new Date(2024, 3, 15));
    });

    it("should work with DateUtils", () => {
        const testDate1 = new Date(2024, 3, 15);
        const testDate2 = new Date(2024, 3, 15, 10, 30);
        const testDate3 = new Date(2024, 3, 16);
        
        expect(DateUtils.isSameDay(testDate1, testDate2)).toBe(true);
        expect(DateUtils.isSameDay(testDate1, testDate3)).toBe(false);
    });
});

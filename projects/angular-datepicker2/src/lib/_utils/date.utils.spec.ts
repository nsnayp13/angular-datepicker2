import { DateUtils } from './date.utils';

describe('DateUtils', () => {
  it('should compare dates correctly with isSameDay', () => {
    const date1 = new Date(2024, 3, 15); // April 15, 2024
    const date2 = new Date(2024, 3, 15, 10, 30); // Same day, different time
    const date3 = new Date(2024, 3, 16); // Different day
    
    expect(DateUtils.isSameDay(date1, date2)).toBe(true);
    expect(DateUtils.isSameDay(date1, date3)).toBe(false);
  });

  it('should compare months correctly with isSameMonth', () => {
    const date1 = new Date(2024, 3, 15); // April 15, 2024
    const date2 = new Date(2024, 3, 20); // April 20, 2024
    const date3 = new Date(2024, 4, 15); // May 15, 2024
    
    expect(DateUtils.isSameMonth(date1, date2)).toBe(true);
    expect(DateUtils.isSameMonth(date1, date3)).toBe(false);
  });

  it('should compare years correctly with isSameYear', () => {
    const date1 = new Date(2024, 3, 15); // April 15, 2024
    const date2 = new Date(2024, 8, 20); // September 20, 2024
    const date3 = new Date(2025, 3, 15); // April 15, 2025
    
    expect(DateUtils.isSameYear(date1, date2)).toBe(true);
    expect(DateUtils.isSameYear(date1, date3)).toBe(false);
  });

  it('should normalize date to start of day (timezone-safe)', () => {
    const date = new Date(2024, 3, 15, 14, 30, 45, 123);
    const normalized = DateUtils.normalizeToDay(date);
    
    expect(normalized.getFullYear()).toBe(2024);
    expect(normalized.getMonth()).toBe(3);
    expect(normalized.getDate()).toBe(15);
    expect(normalized.getHours()).toBe(0);
    expect(normalized.getMinutes()).toBe(0);
    expect(normalized.getSeconds()).toBe(0);
    expect(normalized.getMilliseconds()).toBe(0);
  });

  it('should compare days correctly across timezones', () => {
    const date1 = new Date(2024, 3, 15, 23, 59); // Late evening
    const date2 = new Date(2024, 3, 16, 0, 1);   // Early morning next day
    const date3 = new Date(2024, 3, 15, 12, 0);  // Same day as date1
    
    expect(DateUtils.compareDays(date1, date2)).toBe(-1); // date1 < date2
    expect(DateUtils.compareDays(date1, date3)).toBe(0);  // same day
    expect(DateUtils.compareDays(date2, date1)).toBe(1);  // date2 > date1
  });

  it('should check if date is between dates correctly', () => {
    const startDate = new Date(2024, 3, 10);
    const endDate = new Date(2024, 3, 20);
    const testDate1 = new Date(2024, 3, 15, 14, 30); // Between
    const testDate2 = new Date(2024, 3, 5);          // Before
    const testDate3 = new Date(2024, 3, 25);         // After
    const testDate4 = new Date(2024, 3, 10, 23, 59); // Start date (different time)
    
    expect(DateUtils.isDayBetween(testDate1, startDate, endDate)).toBe(true);
    expect(DateUtils.isDayBetween(testDate2, startDate, endDate)).toBe(false);
    expect(DateUtils.isDayBetween(testDate3, startDate, endDate)).toBe(false);
    expect(DateUtils.isDayBetween(testDate4, startDate, endDate)).toBe(true);
  });

  it('should check if date is in array', () => {
    const targetDate = new Date(2024, 3, 15);
    const dates = [
      new Date(2024, 3, 14),
      new Date(2024, 3, 15, 10, 30), // Same day, different time
      new Date(2024, 3, 16)
    ];
    
    expect(DateUtils.isDateInArray(targetDate, dates)).toBe(true);
    expect(DateUtils.isDateInArray(new Date(2024, 3, 17), dates)).toBe(false);
  });

  it('should adjust date correctly', () => {
    const date = new Date(2024, 3, 15);
    const result = DateUtils.adjustDate(date, 5);
    expect(result.getDate()).toBe(20);
    expect(result.getMonth()).toBe(3);
    expect(result.getFullYear()).toBe(2024);
  });

  it('should adjust month correctly', () => {
    const date = new Date(2024, 3, 15);
    const result = DateUtils.adjustMonth(date, 2);
    expect(result.getMonth()).toBe(5); // May
    expect(result.getDate()).toBe(1); // Should reset to 1st
    expect(result.getFullYear()).toBe(2024);
  });

  it('should adjust year correctly', () => {
    const date = new Date(2024, 3, 15);
    const result = DateUtils.adjustYear(date, 1);
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(0); // Should reset to January
    expect(result.getDate()).toBe(1); // Should reset to 1st
  });

  it('should calculate day with start correctly', () => {
    const date = new Date(2024, 3, 15); // Monday
    const result = DateUtils.getDayWithStart(date, 1); // Start with Monday
    expect(result).toBe(0); // Monday should be 0 when week starts with Monday
  });

  it('should get first date day correctly', () => {
    const date = new Date(2024, 3, 1); // April 1st, 2024
    const result = DateUtils.getFirstDateDay(date, 0); // Start with Sunday
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(7);
  });
});
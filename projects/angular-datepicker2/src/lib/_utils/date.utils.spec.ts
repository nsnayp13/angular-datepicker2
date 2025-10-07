import { DateUtils } from './date.utils';

describe('DateUtils', () => {
  it('should format date correctly with getYmd', () => {
    const date = new Date(2024, 3, 15); // April 15, 2024
    const result = DateUtils.getYmd(date);
    expect(result).toBe('20240315'); // Month is 0-indexed, so April = 3
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
import { Type } from "@angular/core";

export interface Day {
  isDisabled: boolean;
  isWeekEnd: boolean;
  isSelected: boolean;
  isHovered: boolean;
  isInPeriod?: boolean;
  date?: Date;
}

export interface Suggest {
  selectMode: SelectMode;
  selectedDates: Date[];
  title: string;
}

export interface Week {
  id: number;
  days: Day[] | null;
}

export interface Month {
  id: number;
  date: Date;
  weeks: Week[] | null;
}

export interface Calendar {
  id?: number;
  months?: Month[] | null;
}

export interface DisabledDates {
  dates?: Date[];
  before?: Date;
  after?: Date;
}

/**
 * @publicApi
 */
export enum SelectMode {
  Single = "single",
  Multiple = "multiple",
  Period = "period",
}

export enum ViewMode {
  Year = "year",
  Quarter = "quarter",
  Semester = "semester",
}

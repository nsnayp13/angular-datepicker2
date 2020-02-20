export interface Day {
    id?: number;
    title: string;
    isDisabled: boolean;
    isWeekEnd: boolean;
    isSelected: boolean;
    isHovered: boolean;
    isInPeriod?: boolean;
    template?: any;
    date?: Date;
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


export interface Suggest {
    title: string;
    dates: [];
}


/**
 * @publicApi
*/
export enum SelectMode {
    Single = 'single',
    Multiple = 'multiple',
    Period = 'period'
}


export enum ViewMode {
    Year = 'year',
    Quarter = 'quarter',
    Semester = 'semester'
}



import { Type, Component } from '@angular/core'

export interface Day {
    id?: number;
    title: string;
    isDisabled: boolean;
    isWeekEnd: boolean;
    isSelected: boolean;
    isHovered: boolean;
    isInPeriod?: boolean;
    template?: TemplateDay;
    date?: Date;
}

export interface TemplateDay {
    component?: ComponentDay;
}
export interface ComponentDay {
    props: ComponentDayProps[];
    componentClass: Type<any>;
}

export interface ComponentDayProps {

    propName: string;
    type: 'input' | 'output';
    value: any;

}

/*
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
}*/



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



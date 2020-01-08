import React from 'react';

interface CalendarAvailability {
    date: Date,
    status: string
}

interface CalendarSelectorProps {
    days: Date[],
    answers: CalendarAvailability[],
    setCalendarDay(day: CalendarAvailability):void
}

const CalendarSelector = (props: CalendarSelectorProps) => {
    return <div>
        {props.days.map(d => {
            <div>{d.getDay()}</div>
        })}
    </div>
};

export default CalendarSelector;
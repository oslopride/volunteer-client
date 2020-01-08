import React, {useEffect, useState} from 'react';
import styled from "styled-components";

interface AvailabilityCalendarProps {
    className?: string
    fromDate: Date,
    toDate: Date

}

interface AvailabilityProps {
    status: number,
    date: Date
    className?: string
}

const AvailabilityStyle = styled.div`
    background-color: ${props => props.isAvailable ? "#54a07c" : "none"};
    color: ${props => props.isAvailable ? "white" : "black"};
    flex-basis: 14.2%;
    padding: 10px;
    min-height: 50px;
    cursor: pointer;
`;

const Availability = (props: AvailabilityProps) => {
    const [isAvailable, setIsAvailable] = useState(true);

    const onClick = (e: any) => setIsAvailable(!isAvailable);

    return <AvailabilityStyle isAvailable={isAvailable} onClick={onClick}>
        <div>{props.date.toLocaleString('nb-NO', { day: "numeric" })}</div>
        <div>{isAvailable ? "Ledig" : "Opptatt"}</div>
    </AvailabilityStyle>
};

const DayItem = styled.div`
    flex-basis: 14.2%;
    height: 25px;
`;

const CalendarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const AvailabilityCalendar = (props: AvailabilityCalendarProps) => {
    const [calendar, setCalendar] = useState([]);
    useEffect(() => {
        var daysOfYear = [];
        for (var d = props.fromDate; d <= props.toDate; d.setDate(d.getDate() + 1)) {
            daysOfYear.push(new Date(d));
        }
        setCalendar(daysOfYear);
    }, []);

    return (
        <CalendarWrapper>
            <DayItem>Man</DayItem>
            <DayItem>Tir</DayItem>
            <DayItem>Ons</DayItem>
            <DayItem>Tor</DayItem>
            <DayItem>Fre</DayItem>
            <DayItem>Lør</DayItem>
            <DayItem>Søn</DayItem>
            {calendar && calendar.map(d =>
                <Availability date={d}/>
            )}
        </CalendarWrapper>);
};

export default AvailabilityCalendar;
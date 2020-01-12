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
    flex-basis: 13%;
    margin: 5px;
    padding: 5px;
    min-height: 50px;
    cursor: pointer;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    &:hover {
        box-shadow: 0 1px 7px rgba(0,0,0,0.2);
    }
`;

const OnToggleStyle = styled.div`
    margin: 5px 20px;
    border-bottom: ${(props: any) => props.isOn ? "solid 3px " + props.color : "none"};
    font-weight: ${(props: any) => props.isOn ? "bold" : "normal"};
`;

const ToggleStyle = styled.div`
    font-weight: ${(props: any) => props.isOn ? "bold" : "normal"};
    text-decoration: ${(props: any) => props.isOn ? "none" : "underline"};
`;

const BlackPill = styled.div`
    margin: 0 auto;
    display: block;
    width: 20px;
    height: 5px;
    border-radius: 5px;
`;

const GreenPill = styled(BlackPill)`
    background-color: #54a07c;
`;

const RedPill = styled(BlackPill)`
    background-color: #c20f2a;
`;

const OnToggle = (props: any) => {
    return <ToggleStyle isOn={props.isAvailable}>
        Ledig
        {props.isAvailable ? <GreenPill /> : <BlackPill/>}
    </ToggleStyle>;
};
const OffToggle = (props: any) => {
    return <ToggleStyle isOn={!props.isAvailable}>
        {props.isAvailable ? <BlackPill /> : <RedPill />}
        Opptatt
    </ToggleStyle>;
};


const DayStyle = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 auto;
    height: 35px; 
    width: 35px;
    padding: 5px;
    &:hover {
        background-color: #f2f1f2;
        border-radius: 25px;
    }
`;

const Availability = (props: AvailabilityProps) => {
    const [isAvailable, setIsAvailable] = useState(true);

    const onClick = (e: any) => setIsAvailable(!isAvailable);

    return <AvailabilityStyle isAvailable={isAvailable} onClick={onClick}>
        <OnToggle isAvailable={isAvailable} />
        <DayStyle>{props.date.toLocaleString('nb-NO', { day: "numeric" })}</DayStyle>
        <OffToggle isAvailable={isAvailable} />
    </AvailabilityStyle>
};

const DayItem = styled.div`
    flex-basis: 13%;
    margin: 5px;
    height: 25px;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
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
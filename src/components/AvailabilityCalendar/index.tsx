import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {FaCheck, FaSun, FaMoon, FaTimesCircle} from 'react-icons/fa'

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
    font-weight: bold;
`;

const BlackPill = styled.div`
    margin: 2px auto;
    display: block;
    width: 20px;
    height: 5px;
    border-radius: 5px;
`;

const GreenPill = styled(BlackPill)`
    background-color: #54a07c;
    width: 20px;
`;

const YellowPill = styled(BlackPill)`
    background-color: #ffc101;
    width: 10px;
`;

const RedPill = styled(BlackPill)`
    background-color: #c20f2a;
    width: 5px;
`;

const Toggle = (props: any) => {
    return <ToggleStyle>
        {props.status == 0 && "Opptatt"}
        {props.status == 2 && "Ledig dag"}
        {props.status == 3 && "Ledig kveld"}
        {props.status == 1 && "Ledig"}
        {props.status == 0 && <RedPill/>}
        {props.status == 2 && <YellowPill/>}
        {props.status == 3 && <YellowPill/>}
        {props.status == 1 && <GreenPill/>}
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

const SelectorContainer = styled.div`
    padding: 3px 2px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    &:hover {
        background-color: #f1f2f2;
    }
    border-radius: 10px;
`;

const NotAvailableIcon = styled(FaTimesCircle)`
    color: ${(props: any) => props.selected ? "#c20f2a" : "rgba(0,0,0,0.2)"};
    border-radius: 10px;
    &:hover {
        color: #c20f2a;
    }
`;
const AvailableMorningsIcon = styled(FaSun)`
    color: ${(props: any) => props.selected ? "#ffc101" : "rgba(0,0,0,0.2)"};
    border-radius: 10px;
    &:hover {
        color: #ffc101;
    }
`;
const AvailableEveningsIcon = styled(FaMoon)`
    color: ${(props: any) => props.selected ? "#ffc101" : "rgba(0,0,0,0.2)"};
    border-radius: 10px;
    &:hover {
        color: #ffc101;
    }
`;
const AvailableIcon = styled(FaCheck)`
    color: ${(props: any) => props.selected ? "#54a07c" : "rgba(0,0,0,0.2)"};
    border-radius: 10px;
    &:hover {
        color: #54a07c;
    }
`;

const Selector = (props: any) => {
    return <SelectorContainer>
        <NotAvailableIcon selected={props.status === 0} onClick={() => props.setStatus(0)}/>
        <AvailableMorningsIcon selected={props.status === 2} onClick={() => props.setStatus(2)}/>
        <AvailableEveningsIcon selected={props.status === 3} onClick={() => props.setStatus(3)}/>
        <AvailableIcon selected={props.status === 1} onClick={() => props.setStatus(1)}/>
    </SelectorContainer>;
};

const Availability = (props: AvailabilityProps) => {
    const [status, setStatus] = useState(1);

    const onClick = (status: number) => {
        switch (status) {
            case 0:
                setStatus(2);
                break;
            case 1:
                setStatus(0);
                break;
            case 2:
                setStatus(3);
                break;
            case 3:
                setStatus(1);
                break;
        }
    };

    return <AvailabilityStyle>
        <Toggle status={status}/>
        <DayStyle onClick={() => onClick(status)}>{props.date.toLocaleString('nb-NO', {day: "numeric"})}</DayStyle>
        <Selector status={status} setStatus={setStatus}/>
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
import React from "react";
import styled from "styled-components";
import {FaCheck} from "react-icons/fa";

const Container = styled.div`
  display: flex;
`;

const Badge = styled.div`
  flex-shrink: 0;
  flex-basis: 50px;
  border-radius: 25px;
  border: 3px solid ${(props: {active?: boolean; completed?: boolean}) => props.active ? "black" : props.completed ? "#54a07c" : "lightgray"};
  color: ${(props: {active?: boolean; completed?: boolean}) => props.active ? "black" : props.completed ? "white" : "lightgray"};
  display: block;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 1.75em;
  vertical-align: middle;
  font-size: 1.5em;
  margin-top: 25px;
  margin-right: 50px;
  font-weight: 800;
`;

const Content = styled.div`

`;

const CompletedIcon = styled(FaCheck)`
  color: #54a07c;
  vertical-align: middle;
  width: 30px;
  height: 30px;
`;

interface StepProps {
    number: number,
    active?: boolean,
    completed?: boolean,
    children: any
}

const Step = (props: StepProps) => {
    return <Container>
        <Badge active={props.active} completed={props.completed}>{props.completed ? <CompletedIcon /> : props.number}</Badge>
        <Content>{props.children}</Content>
    </Container>;
};

export default Step;
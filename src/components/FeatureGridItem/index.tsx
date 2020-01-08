import React from "react";
import styled from "styled-components";

interface FeatureGridItemProps {
    icon?: JSX.Element,
    title: string,
    children: any
}

const Container = styled.div`
  flex-basis: 50%;
  padding: 25px 100px;
  font-size: 1.2em;
  & > p, & > div {
    font-weight: 300;
    line-height: 1.5em;
  }
`;

const FeatureGridItem = (props: FeatureGridItemProps) => <Container>
    {props.icon}
    <h2>{props.title}</h2>
    {props.children}
</Container>;

export default FeatureGridItem;
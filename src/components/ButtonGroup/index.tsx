import styled from "styled-components";
import React from "react";

const Container = styled.div`
    margin-top: 50px;
    margin-left: 110px;
`;

const ButtonGroup = (props: any) => {
    return <Container>{props.children}</Container>
};

export default ButtonGroup;
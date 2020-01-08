import React from 'react';
import styled from "styled-components";

interface FormGroupProps {
    title?: string,
    disabled?: boolean,
    children: any
}

const Container = styled.div`
    padding: 10px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Headline = styled.h1`
  color: ${(props: {disabled?: boolean}) => props.disabled ? "lightgray" : "black"}
`;

const FormGroup = (props: FormGroupProps) => {
    return <Container>
        {props.title && <Headline disabled={props.disabled}>{props.title}</Headline>}
        <InputContainer>
            {props.children}
        </InputContainer>
    </Container>;
};

export default FormGroup;
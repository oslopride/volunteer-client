import React, {useState} from "react";
import styled from "styled-components";

const Select = styled.select`
    border: 2px solid #f2f2f2;
    border-radius: 3px;
    font-size: 16px;
    line-height: 26px;
    padding: 5px 8px;
    color: ${(props: any) => props.disabled ? "lightgray" : "black"};
    background-color: white;

    margin: 3px 0;

    &::placeholder {
        color: lightgray;
    }
    
    outline: none;

    :focus {
        border: 2px solid #3a1b7b;
    }
`

const Label = styled.label`
  margin: 10px 0;
  color: ${(props: any) => props.disabled ? "lightgray" : "black"};
`;

const Explanation = styled.p`
    font-size: 1em;
    margin-top: 5px;
    color: ${(props: { hasFocus: boolean }) => props.hasFocus ? "black" : "lightgray"};
`;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  flex-basis: calc(50% - 20px);
  
  &:nth-child(odd) {
    margin-right: 20px;
  }
`;

interface FormSelectProps {
    type: string,
    value: any,
    onChange?: any,
    label: string,
    placeholder: string,
    explanation?: string,
    disabled?: boolean,
    children: any
}

export const FormSelect = (props: FormSelectProps) => {
    const [hasFocus, setHasFocus] = useState(false);

    return (
        <Container>
            <Label disabled={props.disabled}>{props.label}</Label>
            <Select
                disabled={props.disabled}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                type={props.type}
                placeholder={props.placeholder}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
            >{props.children}</Select>
            <Explanation hasFocus={hasFocus}>{props.explanation}</Explanation>
        </Container>
    );
};

export default FormSelect;
import React, {SyntheticEvent} from "react";
import styled from "styled-components";

interface RadioButtonProps {
    id: string,
    label: string,
    value: string,
    selectedOption: string,

    onClick(e: SyntheticEvent): void
}

const RadioButtonStyle = styled.div`
    padding: 10px;
    input {
        
    }
    label {
        font-size: 20px;
    }
`;

const RadioButton = (props: RadioButtonProps) => {
    return <RadioButtonStyle><input id={props.id} name={props.id} onChange={props.onClick}
                                    checked={props.value === props.selectedOption} type="radio"/> <label
        onClick={props.onClick} htmlFor={props.id}>{props.label}</label></RadioButtonStyle>
};

export default RadioButton;

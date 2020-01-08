import styled from "styled-components";
import React from "react";

interface TextFieldProps {
    label: string,
    readonly?: boolean,
    required?: boolean,
    className?: string,
    placeholder?: string,
    explanation?:string
}

const checkbox = (props: TextFieldProps) => {
    return <div className={props.className}>
        <input type="checkbox" placeholder={props.placeholder} readOnly={props.readonly} />
        <label>{props.label} {props.required && <em>(påkrevd)</em>}</label>
        {props.explanation && <em>{props.explanation}</em>}
    </div>
};

const CheckBox = styled(checkbox)`
    padding: 10px 0;

    label {
        font-size: 1.2em;
        padding-bottom: 5px;
        em {
           display: inline-block;
           color: gray;
           font-size: 1em;
           padding: 0;
        }
    }
    
    input {
        padding: 5px;
        margin: 5px 10px 5px 0;
        font-size: 1.2em;
        border: 1px solid gray;
    }
    
    input:focus {
        border: 1px solid #3a1b7b
    }
    
    em {
       display: block;
       color: gray;
       font-size: 0.8em;
       padding: 0 0 5px 0;
   }
`;

export default CheckBox;

import styled from "styled-components";
import React from "react";
import DecorativeLine from "../DecorativeLine";

const sectionHeadline = (props: any) => {
    if (props.inverted)
        return <div className={props.className}><h1>{props.children}</h1><DecorativeLine/></div>
    return <div className={props.className}><DecorativeLine/><h1>{props.children}</h1></div>
};

const SectionHeadline = styled(sectionHeadline)`
    > h1 {
        text-transform: uppercase;
        vertical-align: middle;
        padding: 0;
        margin: 0;
        margin-left: 10px;
        display: inline-block;
        font-size: 1em;
    }
`;

export default SectionHeadline;
import styled from "styled-components";
import React from "react";
import SectionHeadline from "../SectionHeader";
import {PrimaryButton, SecondaryButton} from "../Button";

interface ActionButtonProps {
    label: string,
    to: string
}

export interface FeatureProps {
    color?: string,
    sectionTitle?: string,
    title: string,
    image?: string,
    body: any,
    primaryAction?: ActionButtonProps,
    secondaryAction?: ActionButtonProps,
    inverted?: boolean,
    short?: boolean,
    className?: string
}

const feature = (props: FeatureProps) => {
    if (props.short){
        return <div className={props.className}>
            <div>
                <SectionHeadline>{props.sectionTitle}</SectionHeadline>
                <h1>{props.title}</h1>
            </div>
            <div>
                {props.body}
            </div>
        </div>;
    }

    return <div className={props.className}>
        <div>
            <SectionHeadline inverted={props.inverted}>{props.sectionTitle}</SectionHeadline>
            <h1>{props.title}</h1>
            {props.body}
            <div>
                {props.primaryAction && <PrimaryButton to={props.primaryAction.to}>{props.primaryAction.label}</PrimaryButton>}
                {props.secondaryAction && <SecondaryButton to={props.secondaryAction.to}>{props.secondaryAction.label}</SecondaryButton>}
            </div>
        </div>
        <img src={props.image} />
    </div>;
};

const Feature = styled(feature)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: ${(props: FeatureProps) => props.short ? "200px" : "575px" };
    padding: ${(props: FeatureProps) => props.short ? "25px 135px" : "100px 135px" };
    & > div {
        max-width: 600px;
    }
    & > div > h1 {
        font-size: 2.6em;
        font-weight: 800;
        margin: 10px 0 35px 0;
    }
    & > div > p {
        font-size: 1.2em;
        margin-bottom: 35px;
        font-weight: 300;
    }
    & > img {
        height: 400px;
        width: 450px;
        object-fit: cover;
    }
`;

export default Feature;

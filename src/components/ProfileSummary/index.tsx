import React from "react";
import styled from "styled-components";
import {FaCheck} from "react-icons/fa";

const Avatar = styled.img`
    border-radius: 5px;
`;

interface ProfileSummaryProps {
    image: string,
    name: string,
    age: number,
    email: string,
    emailVerified: boolean,
    phone: string,
    phoneVerified: boolean
}

const ProfileSummary = (props: ProfileSummaryProps)=> {
    return <div>
        <Avatar src={props.image} />
        <h1>{props.name}</h1>
        <p>Email: {props.email} {props.emailVerified && <FaCheck/>}</p>
        <p>Phone: {props.phone} {props.phoneVerified && <FaCheck/>}</p>
    </div>;
};

export default ProfileSummary;
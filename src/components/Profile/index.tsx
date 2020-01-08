import React from 'react';
import styled from "styled-components";

interface ProfileProps {
    user: {
        profile: {
            nickname: string,
            name: string,
            email: string,
            picture: string
        }
    },
    signOut: any,
    image?: string,
    name?: string,
    age?: number,
    title?: string,
    pronoun?: string,
    className?: string,
}

const profile = (props: ProfileProps) => {
    return <div className={props.className}>
        <img src={props.user.profile.picture} />
        <div>
            <h2>{props.user.profile.nickname}</h2>
        </div>
        <button onClick={props.signOut}>Logout</button>
    </div>
};

const Profile = styled(profile)`
    display: flex;
    color: white;
    background-color: #3a1b7b;
    padding: 10px;

    & > img {
        content-fit: cover;
        height: 90px;
        width: 90px;
    }
    & > div {
        padding: 0 10px;
    
        h2, h3, h4 {
            margin: 0 0 5px 0;
        }
        h2 {
            font-size: 1.2em;
        }
        h3, h4 {
            font-size: 1em;
            font-weight: normal;
        }
    }
`;

export default Profile;
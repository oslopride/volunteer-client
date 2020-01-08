import React from "react";
import {Button} from "../Button";
import styled from "styled-components";
// @ts-ignore
import { signIn, signOut } from '../../utils/auth0';

const ProfileContainer = styled.div`
    padding: 10px;
`;

const ExtendedProfile = (props: any) => {
    if (props.user){
        return <ProfileContainer>
            <h1>Innlogget som {props.user.profile.nickname}</h1>
            <p>Innlogget med epostadresse {props.user.profile.email} <a href="#" onClick={signOut}>Logg ut</a></p>
        </ProfileContainer>;
    }

    return <ProfileContainer>
        <h1>Opprett bruker</h1>
        <p>For å kunne fylle ut skjemaet må du først opprette en bruker</p>
        <div>
            <Button onClick={signIn}>Registrer ny</Button>
            <Button onClick={signIn} color="#e350a0">Logg inn eksisterende</Button>
        </div>
    </ProfileContainer>;
};

export default ExtendedProfile;
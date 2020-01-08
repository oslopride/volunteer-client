import React, {useState} from "react";
import styled from "styled-components";
import {FaBars, FaTimes} from "react-icons/fa";
import DecorativeLine from "../DecorativeLine";
import {Link} from 'react-router-dom';
import Profile from "../Profile";
// @ts-ignore
import { signIn, signOut } from '../../utils/auth0';

const SLink = styled(Link)`
    text-transform: uppercase;
    padding: 5px 0 5px 20px;
    text-decoration: none;
    font-size: 1.3em;
    font-weight: 800;
    color: black;
    vertical-align: middle;
`;

const MenuItem = styled.div`
    padding: 7px 0 7px 0;
`;

const InactiveLine = styled(DecorativeLine)`
    border-bottom: none;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    width: calc(100% - 40px);
    text-align: right;
    margin: 0 20px;
    cursor: pointer;
`;

const MainMenu = styled.nav`
    position: absolute;
    top: 0;
    right: 0;
    width: 350px;
    background-color: white;
    min-height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`;

const MenuIcon = styled(FaBars)`
  color: black;
  margin: 25px 0;
  vertical-align: middle;
  width: 30px;
  height: 30px;
`;


const CloseIcon = styled(FaTimes)`
  color: black;
  margin: 25px 0;
  vertical-align: middle;
  width: 30px;
  height: 30px;
`;

const MenuButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

const Navigation = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);

    if (isOpen) {
        return <MainMenu>
            <CloseButton onClick={() => setIsOpen(false)}><CloseIcon/></CloseButton>
            {!props.user && <button onClick={signIn}>Login</button>}
            {props.user && <Profile user={props.user} signOut={signOut} />}
            <MenuItem><DecorativeLine/> <SLink to="/">Hjem</SLink></MenuItem>
            <MenuItem><InactiveLine/> <SLink to="#">Arena</SLink></MenuItem>
            <MenuItem><InactiveLine/> <SLink to="#">Om oss</SLink></MenuItem>
            <MenuItem><InactiveLine/> <SLink to="#">Program</SLink></MenuItem>
            <MenuItem><InactiveLine/> <SLink to="#">Frivillig</SLink></MenuItem>
            <MenuItem><InactiveLine/> <SLink to="#">Partnere</SLink></MenuItem>
            <MenuItem><InactiveLine/> <SLink to="#">Artikler</SLink></MenuItem>
            <MenuItem><InactiveLine/> <SLink to="#">Presse</SLink></MenuItem>
            <MenuItem><InactiveLine/> <SLink to="#">Kontakt</SLink></MenuItem>
            <MenuItem><InactiveLine/> <SLink to="#">Pridebutikken</SLink></MenuItem>
        </MainMenu>
    }

    return <MenuButton onClick={() => setIsOpen(true)}><MenuIcon/></MenuButton>;
};

export default Navigation;

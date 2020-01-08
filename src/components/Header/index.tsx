import styled from "styled-components";
import React, {useEffect} from "react";
import Navigation from "../Navigation";
import Logo from "../Logo";

const Time = styled.time`
    font-size: 1.2em;
    font-weight: bold;
    color: #3a1b7b;
    margin: 25px 40px;
    display: inline-block;
    vertical-align: middle;
`;

const UnstyledHeader = (props: any)=> {
    return <header className={props.className}>
        <Logo logo={props.logo} prideName={props.prideName} />
        <div>
            <Time dateTime="2020-06-19 18:00">19. - 28. JUNI 2020</Time>
            <Navigation user={props.user} />
        </div>
    </header>;
};

const Header = styled(UnstyledHeader)`
    width: 100%;
    height: 100px;
    padding: 25px 75px;
    display: flex;
    flex: 0 1 auto;
    justify-content: space-between;
`;

export default Header;
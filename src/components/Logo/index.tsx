import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

interface Props {
    className?: string,
    logo: string,
    prideName: string
}

const logo = ({logo, prideName, className}: Props) => <h1 className={className}>
    <Link to="/">
        <img alt={prideName}
             src={logo}
        />
    </Link>
</h1>;

const Logo = styled(logo)`
    display: block;
    width: 155px;
    height: 80px;
    padding-right: 10px;
    margin: 0;
    img {
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
    }
`;

export default Logo;

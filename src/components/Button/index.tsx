import styled from "styled-components";
import {Link} from 'react-router-dom';

const Button = styled.button`
   display: inline-block;
   border: none;
   text-decoration: none;
   padding: 20px 40px;
   margin-right: 15px;
   color: white;
   text-transform: uppercase;
   box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
   background-color: ${(props: any) => props.color || "#3a1b7b"};
`;

const link = styled(Link)`
   display: inline-block;
   border: none;
   text-decoration: none;
   padding: 20px 40px;
   margin-right: 15px;
   color: white;
   text-transform: uppercase;
   box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
`;

const PrimaryButton = styled(link)`
   background-color: #3a1b7b;
`;

const SecondaryButton = styled(link)`
   background-color: #e350a0;
`;

export {
    PrimaryButton, SecondaryButton, Button
};
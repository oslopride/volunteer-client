import styled from "styled-components";
import React from "react";
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import Feature, {FeatureProps} from "../Feature";

interface PageProps {
    header: FeatureProps,
    children: any
}

interface PageContainerProps {
    color?: string,
    inverted?: boolean,
    short?: boolean
}

const PageContainer = styled.div`
    background-color: ${(props: PageContainerProps) => props.color || "#efecf4"};
    background-image: linear-gradient(${(props: PageContainerProps) => props.inverted ? "184deg" : "174deg"}, ${(props: PageContainerProps) => props.color || "#efecf4"} ${(props: PageContainerProps) => props.short ? "400px, white 400px" : "700px, white 700px"});
`;

const Main = styled.main`
    padding: 0 35px;
`;

const Page = (props: PageProps) => <PageContainer color={props.header.color} inverted={props.header.inverted} short={props.header.short} >
    <HeaderContainer/>
    <Feature {...props.header} />
    <Main>
        {props.children}
    </Main>
    <Footer/>
</PageContainer>;

export default Page;

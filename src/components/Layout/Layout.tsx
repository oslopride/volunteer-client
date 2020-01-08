import styled from "styled-components";

const MainContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
`;

const Aside = styled.aside`
    width: 500px;
    flex-grow: 1;
`;

const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    max-width: 400px;
    flex-basis: auto; /* default value */
    flex-grow: 1;    flex-grow: 1;
`;

const SectionDivider = styled.em`
    display: block;
    text-align: center;
    padding: 10px 0;
`;


export {
    ContentSection,
    SectionDivider,
    MainContainer,
    Aside
};
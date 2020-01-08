import React from 'react';
import {createGlobalStyle} from 'styled-components'
import {normalize} from "polished";
import LandingPageContainer from './containers/LandingPageContainer';
import { Route } from 'react-router-dom';
import AuthenticationCallback from './containers/AuthenticationCallback';
import RegistrationPageContainer from './containers/RegistrationPageContainer';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: proxima-nova, sans-serif;
    background-color: white;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

const App = () => {
    return <React.Fragment>
        <GlobalStyle/>
        <Route exact path="/" component={LandingPageContainer} />
        <Route exact path="/signup" component={RegistrationPageContainer} />
        <Route exact path="/callback" component={AuthenticationCallback} />
    </React.Fragment>
};

export default App;


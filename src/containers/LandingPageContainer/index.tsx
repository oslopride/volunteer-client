import React from 'react';
import {connect} from 'react-redux';
import LandingPage from "../../pages/LandingPage";

const mapStateToProps = (state: { landingPageContent: any; }) => ({
    landingPageContent: state.landingPageContent
});

export default connect(mapStateToProps)(LandingPage);

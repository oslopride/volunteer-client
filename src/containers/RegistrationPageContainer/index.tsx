import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from "../../pages/RegistrationForm";

const mapStateToProps = (state: any) => ({
    user: state.user
});

export default connect(mapStateToProps)(RegistrationForm);

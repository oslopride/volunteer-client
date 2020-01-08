import React from 'react';
import {connect} from 'react-redux';
import Header from "../../components/Header";

const mapStateToProps = (state: { constants: any; user: any; }) => ({
    logo: state.constants.logo,
    prideName: state.constants.prideName,
    user: state.user
});

export default connect(mapStateToProps)(Header);

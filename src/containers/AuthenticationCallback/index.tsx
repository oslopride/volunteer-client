import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { handleAuthenticationCallback } from '../../actions';

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    };
};

const AuthenticationCallback = ({ dispatch, user }) => {
    if (user) return <Redirect to="/signup" />;
    dispatch(handleAuthenticationCallback());

    return <div className="text-center">Loading user profile.</div>;
};

export default connect(mapStateToProps)(AuthenticationCallback);
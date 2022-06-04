import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            props.isStudentAuthenticated ?
                <Component {...props} />
            : <Redirect to="/student" />
        )} />
    );
};

const mapStateToProps = state => {
    return{
        isStudentAuthenticated: state.studentReducer.studentIsAuthenticated
    }
}

export default connect(mapStateToProps)(PrivateRoute)
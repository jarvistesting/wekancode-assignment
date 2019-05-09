import React from 'react';
import {connect} from 'react-redux';
import {logoutAction} from '../Store/actions/loginAction';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <a onClick={props.logoutAction}>Logout</a>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutAction: () => dispatch(logoutAction())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
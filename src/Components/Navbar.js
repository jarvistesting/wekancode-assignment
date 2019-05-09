import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import {connect} from 'react-redux';

class Navbar extends Component {
    render() {
        const links = this.props.isLogin ?  <SignedInLinks /> : <SignedOutLinks />;
        return(
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo center">Staller App</Link>
                    { links }
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        isLogin: store.loginData.isLogin
    }
}

export default connect(mapStateToProps, null)(Navbar);
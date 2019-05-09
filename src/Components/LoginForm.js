import React, { Component }from "react";
import {loginAction} from '../Store/actions/loginAction';
import {connect} from 'react-redux';

class FormPage extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLoginSubmit(this.state);
  }  
  render() {
    return(
      <div className="container">
        <h2 className="mt-5">Sign In</h2>
        <div className="row">
          <div className="col s2"></div>
          <form className="col s8 mt-5" method="post" name="user_login_form" id="user_login_form" onSubmit={this.handleSubmit}>
            <div className="row" style={{marginBottom:'0px'}}>
              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <input id="email" name="email" type="email" className="validate" onChange={this.handleChange} />
                <label htmlFor="email" style={{color:'white'}}>Email</label>
              </div>
            </div>
            <div className="row" style={{marginBottom:'0px'}}>
              <div className="input-field col s12">
                <i className="material-icons prefix">lock_outline</i>
                <input id="password" name="password" type="password" className="validate" onChange={this.handleChange} />
                <label htmlFor="password" style={{color:'white'}}>Password</label>
              </div>
            </div>
            <div className="input-field">
              <button className="btn waves-effect waves-light login-submit" style={{color:'black', backgroundColor:'white'}} type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
              <div className="red-text center">
                  {this.props.errorMsg && this.props.isLogin?  this.props.errorMsg : ''}
                </div>
            </div>
          </form>
          <div className="col s2"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMsg: state.loginData.errorMsg,
    isLogin: state.loginData.isLogin
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      handleLoginSubmit: credentials => dispatch(loginAction(credentials, ownProps))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
import React, {Component} from 'react';
import FormPage from './Components/LoginForm';
import Home from './Components/Home';
import HorseDetail from './Components/HorseDetail';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from './dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={FormPage} />
            <Route path="/horsedetail/:id" render={()=>(this.props.isLogin ? (<HorseDetail />) : (<Redirect to='/signin' />))}/>
            <Route path="/dashboard" render={()=>(this.props.isLogin ? (<Dashboard />) : (<Redirect to='/signin' />))}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.loginData.isLogin
  }
}

export default connect(mapStateToProps, null)(App);

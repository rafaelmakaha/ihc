import React, { Component } from 'react';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Screens/Home';
import Auth from './Authentication/Auth';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import Logout from './Screens/Logout';

export default class Routers extends Component {

  render() {
    var logged_msg = 'É necessário estar logado para acessar este conteúdo !';
    return (
      <Router>
        <Switch>
          <SideBar>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/logout' component={Logout}/>
            <Route exact path='/home' render={() => (
              Auth.logged() ? (
                <Home />
              ) : (
                <Redirect
                  to={{
                    pathname: '/',
                    state: { msg: logged_msg }
                  }}
                />
              )
            )}/>
            <Route exact path='/profile' render={() => (
              Auth.logged() ? (
                <Profile />
              ) : (
                <Redirect
                  to={{
                    pathname: '/',
                    state: { msg: logged_msg }
                  }}
                />
              )
            )}/>
          </SideBar>
        </Switch>
      </Router>
    );
  }
}

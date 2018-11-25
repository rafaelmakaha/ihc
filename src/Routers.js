import React, { Component } from 'react';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Screens/Home';
import Auth from './Authentication/Auth';
import Login from './Screens/Login';


export default class Routers extends Component {

  render() {
    var logged_msg = 'É necessário estar logado para acessar este conteúdo !';
    return (
      <Router>
        <Switch>
          <SideBar>
            <Route exact path='/' component={Home} />
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
            <Route exact path='/login' component={Login}/>
          </SideBar>
        </Switch>
      </Router>
    );
  }
}

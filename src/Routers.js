import React, { Component } from 'react';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Principal from './Screens/Principal';
import Auth from './Authentication/Auth';


export default class Routers extends Component {

  render() {
    var logged_msg = 'É necessário estar logado para acessar este conteúdo !';
    return (
      <Router>
        <Switch>
          <SideBar>
            <Route exact path='/' component={Principal} />
            <Route exact path='/home' render={() => (
              Auth.logged() ? (
                <Principal />
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

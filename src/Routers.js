import React, { Component } from 'react';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Screens/Home';
import Auth from './Authentication/Auth';
import Login from './Screens/Login';
import Sobre from './Screens/Sobre';
import Cart from './Screens/Cart';
import Ajuda from './Screens/Ajuda';
import Profile from './Screens/Profile';

export default class Routers extends Component {
  render() {
    var logged_msg = 'É necessário estar logado para acessar este conteúdo !';
    return (
      <Router>
        <Switch>
          <SideBar>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/about' component={Sobre}/>
            <Route exact path='/help' component={Ajuda}/>
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

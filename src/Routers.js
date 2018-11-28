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
import Announce from './Screens/Announce';
import MyAnnounces from './Screens/MyAnnounces';

import FiltrosdeBarro from './Screens/VisualizacaoFiltros/FiltrosdeBarro';
import Purificadores from './Screens/VisualizacaoFiltros/Purificadores';
import Ozonizadores from './Screens/VisualizacaoFiltros/Ozonizadores';
import BebedourosdeGalao from './Screens/VisualizacaoBebedouros/BebedourosdeGalao';
import BebedourosdePressao from './Screens/VisualizacaoBebedouros/BebedourosdePressao';

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
            <Route exact path='/filtros_barro' component={FiltrosdeBarro}/>
            <Route exact path='/purificadores' component={Purificadores}/>
            <Route exact path='/ozonizadores' component={Ozonizadores}/>
            <Route exact path='/bebedouros_galao' component={BebedourosdeGalao}/>
            <Route exact path='/bebedouros_pressao' component={BebedourosdePressao}/>
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
            <Route exact path='/announce' render={() => (
              Auth.logged() ? (
                <Announce />
              ) : (
                <Redirect
                  to={{
                    pathname: '/',
                    state: { msg: logged_msg }
                  }}
                />
              )
            )}/>
            <Route exact path='/my_announces' render={() => (
              Auth.logged() ? (
                <MyAnnounces />
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

import React, { Component } from 'react';
import {Typography, Grid } from '@material-ui/core/';
import Produto from '../Components/Produto';


export default class Ajuda extends Component {
    render(){
        return (
        <div>
          <fieldset><legend>Fale conosco</legend>
            <p>Assunto: <input type="text" size="40"/></p>
            <p>Mensagem: </p>
            <textarea cols="60" rows="10"></textarea>
            <br/>
            <br/>
            <button>Enviar</button>
          </fieldset>
        </div>
        )
    }
}

import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia, Button, Grid } from '@material-ui/core';
import CustomizedModal from '../Components/CustomizedModal';

export default class Ajuda extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      json: this.props.json
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
      this.setState({ open: true });
  }
  closeModal(){
    this.setState({open: false});
  }
    render(){
        return (
        <div>
          <fieldset><legend>Fale conosco</legend>
            <p>Assunto: <input type="text" size="40"/></p>
            <p>Mensagem: </p>
            <textarea cols="60" rows="10"></textarea>
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={this.openModal}>Enviar</Button>
            <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                <Typography variant="h4" >Mensagem enviada para nossa caixa de correios.
                Por favor, aguarde o retorno</Typography>
                <Button variant="contained" color="primary" onClick={this.closeModal}>Ok</Button>
            </CustomizedModal>
          </fieldset>
        </div>
        )
    }
}

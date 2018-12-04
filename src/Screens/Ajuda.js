import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Input, FormLabel } from '@material-ui/core';
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
    window.location.reload();
  }

  render(){
      return (
      <div>
        <fieldset><legend>Fale conosco</legend>
          <p><FormLabel>E-mail: &nbsp; <Input type="text" size="40"/></FormLabel></p>
          <p><FormLabel>Assunto: <Input type="text" size="40"/></FormLabel></p>
          <p><FormLabel>Mensagem: </FormLabel></p>
          <textarea cols="60" rows="10"></textarea>
          <br/>
          <br/>
          <Button variant="contained" color="primary" onClick={this.openModal}>Enviar</Button>
          <CustomizedModal open={this.state.open} onClose={this.closeModal}>
              <Typography variant="h4" >Mensagem enviada para nossa caixa de correios.<br/>
              Por favor, aguarde o retorno.</Typography><br/>
              <Button variant="contained" color="primary" onClick={this.closeModal}>Ok</Button>
          </CustomizedModal>
        </fieldset>
      </div>
      )
  }
}

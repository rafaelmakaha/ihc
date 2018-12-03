import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Input, FormLabel } from '@material-ui/core';
import CustomizedModal from '../Components/CustomizedModal';
import { Link } from 'react-router-dom';

export default class MyAnnounces extends Component {
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

  getValue(){
    var testando = this.refs.teste.getValue;
    console.log(testando);
  }

  render(){
      return (
      <div>
        <fieldset><legend>Informações do produto</legend>
          <p><FormLabel>Nome do produto: &nbsp; <Input type="text" size="40"/></FormLabel></p>
          <p><FormLabel>Tipo do produto: <Input type="text" size="40"/></FormLabel></p>
          <p><FormLabel>Local: <Input ref="teste" type="text" size="40"/></FormLabel></p>
          <p><FormLabel>Descrição do produto: </FormLabel></p>
          <textarea cols="60" rows="10"></textarea>
          <br/>
          <br/>
          <Button variant="contained" color="primary" onClick={this.openModal}>Enviar</Button>
          <CustomizedModal open={this.state.open} onClose={this.closeModal}>
            <Typography variant="h4" >Anúncio publicado com sucesso.</Typography><br/>
            <Button variant="contained" color="primary" onClick={this.closeModal}>Ok</Button>
          </CustomizedModal>
        </fieldset>
      </div>
      )
  }
}

import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Input, FormLabel, FormControlLabel, TextField, RadioGroup, Radio } from '@material-ui/core';
import CustomizedModal from '../Components/CustomizedModal';

export default class MyAnnounces extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      json: this.props.json,
      value: 'filtros',
      value2: 'novo'
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

  handleChange = event => {
      this.setState({ value: event.target.value });
    };
  handleChange2 = event => {
        this.setState({ value2: event.target.value2 });
      };

  render(){
      return (
      <div>
        <fieldset><legend>Informações do produto</legend>
          <p><FormLabel>Nome do produto: &nbsp; <Input type="text" size="40"/></FormLabel></p>
          <p><FormLabel>Imagem: <button>Procurar arquivo</button></FormLabel></p>
          <p><FormLabel>Tipo do produto:
          <RadioGroup value={this.state.value}
            onChange={this.handleChange}>
          <FormControlLabel value='filtros' control={<Radio color="primary"/>} label="Filtro de barro"/>
          <FormControlLabel value='purificador' control={<Radio color="primary"/>} label="Purificador"/>
          <FormControlLabel value='ozonizadores' control={<Radio color="primary"/>} label="Ozonizador"/>
          <FormControlLabel value='bebedouros de galão' control={<Radio color="primary"/>} label="Bebedouro de galão"/>
          <FormControlLabel value='bebedouros de pressão' control={<Radio color="primary"/>} label="Bebedouro de pressão"/>
          </RadioGroup>
          </FormLabel></p>
          <p><FormLabel>Localização: <Input ref="teste" type="text" size="40"/></FormLabel></p>
          <p><FormLabel>Preço: R$ <TextField type="number"/></FormLabel></p>
          <p><FormLabel>Classificação:
          <RadioGroup value={this.state.value2}
            onChange={this.handleChange2}>
          <FormControlLabel value='novo' control={<Radio color="primary"/>} label="Novo"/>
          <FormControlLabel value='usado' control={<Radio color="primary"/>} label="Usado"/>
          </RadioGroup>
          </FormLabel></p>
          <p><FormLabel>Descrição: </FormLabel></p>
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

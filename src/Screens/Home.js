import React, { Component } from 'react';
import {Typography, Grid, Button } from '@material-ui/core';
import Produto from '../Components/Produto';
import CustomizedModal from '../Components/CustomizedModal';
import Login from './Login';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: "",
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ open: true });
    };
    closeModal() {
        this.setState({ open: false });
    };
    render(){
        return (
        <div>
            <Typography> Teste </Typography>
            <Grid container>
                <Grid item>
                    <Produto nome="Testado1" preco="49" img="filtro_barro"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado2" preco="49" img="filtro_barro"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado3" preco="49" img="filtro_barro"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado4" preco="49" img="filtro_barro"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado5" preco="49" img="filtro_barro"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado6" preco="49" img="filtro_barro"/>
                </Grid>
            </Grid>
            <Button onClick={this.openModal}>Abre Modal</Button>
            <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                <Login />
            </CustomizedModal>
        </div>
        )
    }
}
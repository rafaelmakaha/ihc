import React, { Component } from 'react';
import {Typography, Grid, Button } from '@material-ui/core';
import Produto from '../../Components/Produto';
import CustomizedModal from '../../Components/CustomizedModal';
import Login from '../Login';
import { filtros_barro } from '../../Resources/filtrosbarro.json';


export default class FiltrosdeBarro extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false,
            filtros_barro
        }
    }

    render(){
        return (
        <div>
            <Grid container>
                <Grid item>
                    <Produto json={this.state.filtros_barro[0]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.filtros_barro[1]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.filtros_barro[2]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.filtros_barro[3]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.filtros_barro[4]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.filtros_barro[5]} />
                </Grid>
            </Grid>
            <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                <Login />
            </CustomizedModal>
        </div>
        )
    }
}
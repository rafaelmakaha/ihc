import React, { Component } from 'react';
import {Typography, Grid, Button } from '@material-ui/core';
import Produto from '../../Components/Produto';
import CustomizedModal from '../../Components/CustomizedModal';
import Login from '../Login';
import { purificadores } from '../../Resources/purificadores.json';


export default class Purificadores extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false,
            purificadores
        }
    }

    render(){
        return (
        <div>
            <Grid container>
                <Grid item>
                    <Produto json={this.state.purificadores[0]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.purificadores[1]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.purificadores[2]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.purificadores[3]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.purificadores[4]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.purificadores[5]} />
                </Grid>
            </Grid>
            <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                <Login />
            </CustomizedModal>
        </div>
        )
    }
}
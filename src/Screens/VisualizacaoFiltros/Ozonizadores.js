import React, { Component } from 'react';
import {Typography, Grid, Button } from '@material-ui/core';
import Produto from '../../Components/Produto';
import CustomizedModal from '../../Components/CustomizedModal';
import Login from '../Login';
import { ozonizadores } from '../../Resources/ozonizadores.json';


export default class Ozonizadores extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false,
            ozonizadores
        }
    }

    render(){
        return (
        <div>
            <Grid container>
                <Grid item>
                    <Produto json={this.state.ozonizadores[0]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.ozonizadores[1]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.ozonizadores[2]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.ozonizadores[3]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.ozonizadores[4]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.ozonizadores[5]} />
                </Grid>
            </Grid>
            <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                <Login />
            </CustomizedModal>
        </div>
        )
    }
}
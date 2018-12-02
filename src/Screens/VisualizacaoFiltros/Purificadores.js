import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Produto from '../../Components/Produto';
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
            <Grid container spacing={16}>
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
        </div>
        )
    }
}
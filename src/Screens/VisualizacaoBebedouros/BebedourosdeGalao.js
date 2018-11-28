import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Produto from '../../Components/Produto';
import { bebedouros_galao } from '../../Resources/bebedouros_galao.json';


export default class FiltrosdeBarro extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false,
            bebedouros_galao
        }
    }

    render(){
        return (
        <div>
            <Grid container>
                <Grid item>
                    <Produto json={this.state.bebedouros_galao[0]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.bebedouros_galao[1]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.bebedouros_galao[2]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.bebedouros_galao[3]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.bebedouros_galao[4]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.bebedouros_galao[5]} />
                </Grid>
            </Grid>
        </div>
        )
    }
}
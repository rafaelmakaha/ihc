import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Produto from '../../Components/Produto';
import { bebedouros_pressao } from '../../Resources/bebedouros_pressao.json';


export default class FiltrosdeBarro extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false,
            bebedouros_pressao
        }
    }

    render(){
        return (
        <div>
            <Grid container>
                <Grid item>
                    <Produto json={this.state.bebedouros_pressao[0]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.bebedouros_pressao[1]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.bebedouros_pressao[2]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.bebedouros_pressao[3]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.bebedouros_pressao[4]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.bebedouros_pressao[5]} />
                </Grid>
            </Grid>
        </div>
        )
    }
}
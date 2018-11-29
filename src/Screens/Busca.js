import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Produto from '../Components/Produto';
import { FGA } from '../Resources/busca_FGA.json';


export default class Busca extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false,
            FGA: FGA
        }
    }

    render(){
        return (
        <div>
            <Grid container>
                <Grid item>
                    <Produto json={this.state.FGA[0]} />
                </Grid>
            </Grid>
        </div>
        )
    }
}

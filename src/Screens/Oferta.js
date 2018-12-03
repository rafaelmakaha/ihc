import React, {Component} from 'react';
import Produto from '../Components/Produto';
import { produtos } from '../Resources/produtos.json';
import {
    Grid,
    Card,
    Typography,
} from '@material-ui/core';

export default class Oferta extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false,
            produtos: produtos
        }
    }
    render(){
        return(
            <Card>
                <Typography variant="h4" >Ofertas</Typography>
                <br/>
                <Grid container spacing={16}>
                    <Grid item>
                        <Produto json={this.state.produtos[0]} />
                    </Grid>
                    <Grid item>
                        <Produto json={this.state.produtos[1]} />
                    </Grid>
                    <Grid item>
                        <Produto json={this.state.produtos[2]} />
                    </Grid>
                    <Grid item>
                        <Produto json={this.state.produtos[3]} />
                    </Grid>
                    <Grid item>
                        <Produto json={this.state.produtos[4]} />
                    </Grid>
                    <Grid item>
                        <Produto json={this.state.produtos[5]} />
                    </Grid>
                    <Grid item>
                        <Produto json={this.state.produtos[6]} />
                    </Grid>
                    <Grid item>
                        <Produto json={this.state.produtos[7]} />
                    </Grid>
                    <Grid item>
                        <Produto json={this.state.produtos[8]} />
                    </Grid>
                    <Grid item>
                        <Produto json={this.state.produtos[9]} />
                    </Grid>
                </Grid>
            </Card>
        );
    }
}
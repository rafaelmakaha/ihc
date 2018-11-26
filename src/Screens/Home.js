import React, { Component } from 'react';
import {Typography, Grid, Button } from '@material-ui/core';
import Produto from '../Components/Produto';


export default class Home extends Component {
    render(){
        return (
        <div>
            <Typography> Teste </Typography>
            <Grid container>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="filtro_barro"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="filtro_barro"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="filtro_barro"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="filtro_barro"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="filtro_barro"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="filtro_barro"/>
                </Grid>
            </Grid>
        </div>
        )
    }
}
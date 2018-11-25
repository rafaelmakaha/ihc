import React, { Component } from 'react';
import {Typography, Grid } from '@material-ui/core/';
import Produto from '../Components/Produto';


export default class Home extends Component {
    render(){
        return (
        <div>
            <Typography> Teste </Typography>
            <Grid container={24}>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="../../img/filtro_barro.jpg"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="../../img/filtro_barro.jpg"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="../../img/filtro_barro.jpg"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="../../img/filtro_barro.jpg"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="../../img/filtro_barro.jpg"/>
                </Grid>
                <Grid item>
                    <Produto nome="Testado" preco="49" img="../../img/filtro_barro.jpg"/>
                </Grid>
            </Grid>
        </div>
        )
    }
}
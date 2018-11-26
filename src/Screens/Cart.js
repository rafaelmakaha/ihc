import React, { Component } from 'react';
import {Typography, Grid } from '@material-ui/core';
import CartProduct from '../Components/CartProduct';
import CartService from '../Services/CartService';


export default class Cart extends Component {

    constructor(props){
        super(props);

        this.state = {
            list: CartService.getCarts()
        }
    }

    render(){
        console.log('list = ',this.state.list);

        const carts = this.state.list.map((carts, i) => {
            return(
                <Grid item>
                    <CartProduct nome={carts.nome} preco={carts.preco} img="filtro_barro"/>                
                </Grid>
            )
        });
        return (
        <div>
            <Typography> Teste </Typography>
            <Grid container>
                {/* <Grid item>
                    <CartProduct nome="Testado" preco="49" img="filtro_barro"/>
                </Grid> */}
                {carts}
            </Grid>
        </div>
        )
    }
}
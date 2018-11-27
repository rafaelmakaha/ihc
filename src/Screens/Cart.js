import React, { Component } from 'react';
import {Typography, Grid } from '@material-ui/core';
import CartProduct from '../Components/CartProduct';
import CartService from '../Services/CartService';


export default class Cart extends Component {

    constructor(){
        super();

        this.state = {
            list: CartService.getCarts()
        }

        this.removeCart = this.removeCart.bind(this);        
    }


    removeCart(index,nome){
        // console.log('index = ', index);
        let json = {
            nome: nome
        }
        CartService.removeCart(json);
        
        this.setState({
            list: this.state.list.filter((e,i)=>{
                console.log('i = ', i);
                console.log('index = ', index);
                return i !== index
            }, function(){
                this.shouldComponentUpdate(()=>{
                    return true;
                });
            })
        })
        // this.setState({
        //     list: s
        // }) 
 
        console.log('this.state.list = ', this.state.list);
        window.location.reload();
    }

    render(){
        var carts;
        if(this.state.list !== null && this.state.list !== ''){
            carts = this.state.list.map((carts, i) => {
                return(
                    <Grid item>
                        <CartProduct nome={carts.nome} preco={carts.preco} img={carts.img} removeCart={this.removeCart.bind(this,i,carts.nome)} />                
                    </Grid>
                )
            });

        }

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
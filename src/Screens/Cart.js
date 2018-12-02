import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
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


    removeCart(index,json){
        // CartService.removeValue(preco);
        CartService.removeCart(json);
        // localStorage.setItem('valorTotal', '');
        console.log('this.state.list = ', this.state.list);
        window.location.reload();
    }

    render(){
        var carts;
        if(this.state.list !== null && this.state.list !== ''){
            carts = this.state.list.map((json, i) => {
                console.log('json ==== ', json);
                return(
                    <Grid item>
                        <CartProduct json={json} removeCart={this.removeCart.bind(this,i,json)} />                
                    </Grid>
                )
            });

        }

        const mui_theme = createMuiTheme ({
            palette: {
                primary: green,
            }
        })

        var carrinho;
        console.log(CartService.getValue());
        if (CartService.getValue() !== "0,00" ){
            carrinho = (
                <div>
                    <Grid container direction="column">
                        <Grid container direction="row" spacing={40} alignItems="center">
                            <Grid item sm={2}>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant="h5">Nome</Typography>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant="h5">Valor</Typography>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant="h5">Quantidade</Typography>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant="h5">Detalhes</Typography>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant="h5">Remover</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="column">
                        {/* <Grid item>
                            <CartProduct nome="Testado" preco="49" img="filtro_barro"/>
                        </Grid> */}
                        {carts}
                    </Grid>
                    <Grid container direction="column">
                        <Grid container direction="row" spacing={32} alignItems="center">
                            <Grid item sm={3}>
                                <Typography variant="h5">Total: R$ {CartService.getValue()}</Typography>
                            </Grid>
                            <Grid item sm={3}>
                                {/* <Button variant="contained" size="small" color="primary" onClick={CartService.clearCarts}>Continuar comprando</Button>                                 */}
                                <Button variant="contained" size="small" color="primary" component={Link} to='/'>Continuar comprando</Button>                                
                            </Grid>
                            <Grid item sm={3}>
                                <MuiThemeProvider theme={mui_theme}>
                                    <Button variant="contained" size="small" color="primary" component={Link} to='/payment'>Finalizar Compra</Button>
                                </MuiThemeProvider>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            )
        } else {
            carrinho = (
            <div>
                <Grid container direction="column">
                <Typography variant="h5">Você não possui itens no carrinho! :(</Typography>                    
                </Grid>                
            </div>
            )
        }

        return (
            <div>
                {carrinho}
            </div>
        )
    }
}
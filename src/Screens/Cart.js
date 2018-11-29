import React, { Component } from 'react';
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


    removeCart(index,nome,preco){
        // console.log('index = ', index);
        let json = {
            nome: nome,
            preco: preco
        }
        // CartService.removeValue(preco);
        CartService.removeCart(json);
        
        // this.setState({
        //     list: this.state.list.filter((e,i)=>{
        //         console.log('i = ', i);
        //         console.log('index = ', index);
        //         return i !== index;
        //     }
        // })
        // this.setState({
        //     list: s
        // }) 
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
                        <CartProduct json={json} removeCart={this.removeCart.bind(this,i,json.nome,json.preco)} />                
                    </Grid>
                )
            });

        }

        const mui_theme = createMuiTheme ({
            palette: {
                primary: green,
            }
        })

        return (
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
                    </Grid>
                    <Grid item sm={3}>
                        <Typography variant="h5">Total: R$ {CartService.getValue()}</Typography>
                    </Grid>
                    <Grid item sm={3}>
                        <MuiThemeProvider theme={mui_theme}>
                            <Button variant="contained" color="primary">Finalizar Compra</Button>
                        </MuiThemeProvider>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        )
    }
}
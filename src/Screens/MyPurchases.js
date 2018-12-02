import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import MyPurchaseProducts from '../Components/MyPurchaseProducts'
import CartService from '../Services/CartService';


export default class MyPurchases extends Component {

    constructor(){
        super();

        this.state = {
            list: CartService.getHistorico()
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
                        <MyPurchaseProducts json={json} removeCart={this.removeCart.bind(this,i,json)} />                
                    </Grid>
                )
            });

        }

        // const mui_theme = createMuiTheme ({
        //     palette: {
        //         primary: green,
        //     }
        // })

        var carrinho;
        console.log('historico = ',CartService.getHistorico());
        if (CartService.getHistorico()){
            carrinho = (
                <div>
                    <Typography variant="h4">Histórico de Compras</Typography>
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
                                <Typography variant="h5">Data</Typography>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant="h5">Detalhes</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="column">
                        {carts}
                    </Grid>
                    {/* <Grid container direction="column">
                        <Grid container direction="row" spacing={32} alignItems="center">
                            <Grid item sm={3}>
                                <Typography variant="h5">Valor da compra: R$ {CartService.getValue()}</Typography>
                            </Grid>
                        </Grid>
                    </Grid> */}
                </div>
            )
        } else {
            carrinho = (
            <div>
                <Grid container direction="column">
                    <Typography variant="h5">Você ainda não comprou nenhum item! :(</Typography>                    
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
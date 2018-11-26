import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia, Button } from '@material-ui/core';
import filtro_barro from '../Assets/filtro_barro.jpg'
import CartService from '../Services/CartService';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


export default class Produto extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: this.props.nome,
            preco: this.props.preco,
            img: this.props.img,
        }

        this.sendToCart = this.sendToCart.bind(this);
    }

    sendToCart(state){
        console.log("SEND TO CART");
        let json = {
            nome: this.state.nome,
            preco: this.state.preco,
            img: this.state.img
        }
        console.log('json = ', json)
        CartService.addCart(json);
    }

    getImage(image){
        switch(image){
            case 'filtro_barro':
                return filtro_barro;
            default:
                return null;
        }
    }

    render(){
        const styles = {
            image: {
                width: 151,
                height: 151
            }
        }
        return(
            <Card >
                <CardContent>
                    <CardMedia style={styles.image} image={this.getImage(this.state.img)} title="Teste" >
                        {/* <img alt="nao tem" src={require('../Assets/filtro_barro.jpg')} /> ESSA APARECE */} 
                        {/* <img alt="nao tem" width="20" height="20" src={'../Assets/filtro_barro.jpg'} /> */}
                    </CardMedia>
                    <Typography variant="body1">
                        {this.state.nome}
                    </Typography>
                    <Typography variant="h6">
                        R$: {this.state.preco},00
                    </Typography>
                    <Button variant="contained" color="secondary" size="small" >Comprar</Button>
                    <IconButton variant="fab" color="secondary" aria-label="Add" size="small" onClick={this.sendToCart} >
                        <AddIcon />
                    </IconButton>
                </CardContent>
            </Card >
        )
    }
}
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia, Button } from '@material-ui/core';
import filtro_barro from '../Assets/filtro_barro.jpg'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CartService from '../Services/CartService';



export default class CartProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: this.props.nome,
            preco: this.props.preco,
            img: this.props.img
        }

        this.removeCart = this.removeCart.bind(this);
    }

    getImage(image){
        switch(image){
            case 'filtro_barro':
                return filtro_barro;
            default:
                return null;
        }
    }

    removeCart(){
        let json = {
            nome: this.state.nome,
            preco: this.state.preco,
            img: this.state.img
        }
        CartService.removeCart(json);
        // this.setState(null);
        this.setState({
            list: CartService.getCarts()
        })
    }
    
    render(){

    const styles = {
            image: {
                height: 100,
                width: 100
            },
            card: {
                minWidth: 1000
            },
            title:{
                fontSize:400
            }
        }

        console.log(this.state)

        return(
            <Card>
                <CardContent >
                    <CardMedia style={styles.image} image={this.getImage(this.state.img)} title="Teste" >
                        {/* <img alt="nao tem" src={require('../Assets/filtro_barro.jpg')} /> ESSA APARECE */} 
                        {/* <img alt="nao tem" width="20" height="20" src={'../Assets/filtro_barro.jpg'} /> */}
                    </CardMedia>

                    <Typography variant="body1">
                        {this.state.nome}
                    </Typography>
                    <Typography variant="h6" >
                        R$: {this.state.preco},00
                    </Typography>
                    <IconButton aria-label="Delete" size="small" onClick={this.props.removeCart} >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </CardContent>
            </Card >
        )
    }
}
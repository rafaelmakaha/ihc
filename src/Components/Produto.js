import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia, Button, Grid } from '@material-ui/core';
import filtro_barro from '../Assets/filtro_barro.jpg'
import CartService from '../Services/CartService';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ProductDetail from './ProductDetail';
import CustomizedModal from './CustomizedModal';

export default class Produto extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            json: this.props.json
        }
        console.log('json no produto = ', this.state.json);
        this.sendToCart = this.sendToCart.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ open: true });
    };
    closeModal() {
        this.setState({ open: false });
    };

    sendToCart(state){
        console.log("SEND TO CART");
        // let json = {
        //     nome: this.state.json.nome,
        //     preco: this.state.json.preco,
        //     img: this.state.json.img
        // }
        // console.log('json = ', json)
        CartService.addCart(this.state.json);
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
                    <CardMedia style={styles.image} image={this.getImage(this.state.json.img)} title="Teste" >
                        {/* <img alt="nao tem" src={require('../Assets/filtro_barro.jpg')} /> ESSA APARECE */} 
                        {/* <img alt="nao tem" width="20" height="20" src={'../Assets/filtro_barro.jpg'} /> */}
                    </CardMedia>
                    <Typography variant="body1">
                        {this.state.json.nome}
                    </Typography>
                    <Typography variant="h6">
                        R$: {this.state.json.preco},00
                    </Typography>
                    
                    <Grid container spacing={24}>
                        <Grid item xs={6}>    
                            <Button variant="contained" color="secondary" size="small" >Comprar</Button>
                        </Grid>

                        <Grid item xs={3}>
                            <IconButton variant="extended" color="primary" aria-label="Add" size="small" onClick={this.sendToCart} >
                                <ShoppingCart /><AddIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    
                    <Button variant="contained" color="primary" size="small" onClick={this.openModal} >Detalhes</Button>

                    <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                        <ProductDetail json={this.state.json} />
                    </CustomizedModal>
                </CardContent>
            </Card >
        )
    }
}
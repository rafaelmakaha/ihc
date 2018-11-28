import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia, Button } from '@material-ui/core';
import filtro_barro from '../Assets/filtro_barro.jpg'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CartService from '../Services/CartService';
import CustomizedModal from './CustomizedModal';
import ProductDetail from './ProductDetail';



export default class CartProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            json: this.props.json
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    getImage(image){
        switch(image){
            case 'filtro_barro':
                return filtro_barro;
            default:
                return null;
        }
    }

    openModal() {
        this.setState({ open: true });
    };
    closeModal() {
        this.setState({ open: false });
    };
    
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

        // console.log(this.state)

        return(
            <Card>
                <CardContent >
                    <CardMedia style={styles.image} image={this.getImage(this.state.json.img)} title="Teste" >
                        {/* <img alt="nao tem" src={require('../Assets/filtro_barro.jpg')} /> ESSA APARECE */} 
                        {/* <img alt="nao tem" width="20" height="20" src={'../Assets/filtro_barro.jpg'} /> */}
                    </CardMedia>

                    <Typography variant="body1">
                        {this.state.json.nome}
                    </Typography>
                    <Typography variant="h6" >
                        R$: {this.state.json.preco},00
                    </Typography>
                    
                    <Button variant="contained" color="primary" size="small" onClick={this.openModal} >Detalhes</Button>

                    <IconButton aria-label="Delete" size="small" onClick={this.props.removeCart} >
                        <DeleteIcon fontSize="small" />
                    </IconButton>

                    <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                        <ProductDetail json={this.state.json} />
                    </CustomizedModal>
                </CardContent>
            </Card >
        )
    }
}
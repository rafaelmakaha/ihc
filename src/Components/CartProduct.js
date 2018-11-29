import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia, Button, Grid } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CustomizedModal from './CustomizedModal';
import ProductDetail from './ProductDetail';

//IMAGENS
import filtro_barro from '../Assets/filtro_barro.jpg'
import ozonizador_0 from '../Assets/ozonizador_0.png'
import purificador_0 from '../Assets/purificador_0.jpg'
import bebedouro_galao_0 from '../Assets/bebedouro_galao_0.jpg'
import bebedouro_pressao_0 from '../Assets/bebedouro_pressao_0.jpg'

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
            case 'ozonizador_0':
                return ozonizador_0;
            case 'purificador_0':
                return purificador_0;
            case 'bebedouro_galao_0':
                return bebedouro_galao_0;
            case 'bebedouro_pressao_0':
                return bebedouro_pressao_0;
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
                height: 45,
                width: 45
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
                    <Grid container direction="row" spacing={40} alignItems="center">
                        <Grid item sm={2}>
                            <CardMedia style={styles.image} image={this.getImage(this.state.json.img)} title="Teste" >
                                {/* <img alt="nao tem" src={require('../Assets/filtro_barro.jpg')} /> ESSA APARECE */}
                                {/* <img alt="nao tem" width="20" height="20" src={'../Assets/filtro_barro.jpg'} /> */}
                            </CardMedia>
                        </Grid>

                        <Grid item sm={2}>
                            <Typography variant="body1">
                                {this.state.json.nome}
                            </Typography>
                        </Grid>

                        <Grid item sm={2}>
                            <Typography variant="h6" >
                                R$: {this.state.json.preco}
                            </Typography>
                        </Grid>

                        <Grid item sm={2}>
                            <Button variant="contained" color="primary" size="small" onClick={this.openModal} >Detalhes</Button>
                        </Grid>

                        <Grid item sm={2}>

                            <IconButton aria-label="Delete" size="small" onClick={this.props.removeCart} >
                                <DeleteIcon fontSize="medium" />
                            </IconButton>

                            <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                                <ProductDetail json={this.state.json} />
                            </CustomizedModal>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card >
        )
    }
}

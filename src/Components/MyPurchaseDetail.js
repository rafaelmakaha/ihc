import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia, Grid } from '@material-ui/core';

//IMAGENS
import filtro_barro from '../Assets/filtro_barro.jpg'
import ozonizador_0 from '../Assets/ozonizador_0.png'
import purificador_0 from '../Assets/purificador_0.jpg'
import bebedouro_galao_0 from '../Assets/bebedouro_galao_0.jpg'
import bebedouro_pressao_0 from '../Assets/bebedouro_pressao_0.jpg'
import CartService from '../Services/CartService';

export default class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            json: this.props.json
        }
        this.sendToCart = this.sendToCart.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.removeQuantity = this.removeQuantity.bind(this);
    }

    sendToCart(){
        console.log("SEND TO CART");
        var json = this.state.json;
        if(json.quantidade > 0){
            CartService.addValue(json.preco, json.quantidade);
            CartService.addCart(json);
            console.log("SEND TO CART - >",json);
        }
        window.location.reload();
    }

    removeQuantity(){
        var json = this.state.json;

        if(this.state.json.quantidade > 0){
            json.quantidade -= 1;
            this.setState({json : json})
        }
    }

    addQuantity(){
        var json = this.state.json;

        json.quantidade += 1;
        this.setState({json : json});
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

        return(
            <Card>
                <CardContent >
                    <Grid container spacing={30}>
                        <Grid item xs={9}>
                            <Typography variant="h5">
                                {this.state.json.nome}
                            </Typography>
                            <Typography variant="h6" >
                                Local: {this.state.json.local}
                            </Typography>

                            <Typography variant="h6" >
                                Tipo: {this.state.json.tipo}
                            </Typography>

                        </Grid>

                        <Grid item xs={3}>
                            <CardMedia style={styles.image} image={this.getImage(this.state.json.img)} title="Teste" />
                            <Typography variant="h6" >
                                R$: {this.state.json.preco}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0}>
                        <Grid item xs={7}>
                            <Typography variant="h6" >
                                Descrição: {this.state.json.descricao}
                            </Typography>

                            <Typography variant="h6" >
                                Inclui:
                                <div>
                                    {this.state.json.inclui[0]}
                                </div>
                                <div>
                                    {this.state.json.inclui[1]}
                                </div>
                            </Typography>
                        </Grid>                        
                    </Grid>
                    
                </CardContent>
            </Card >
        )
    }
}
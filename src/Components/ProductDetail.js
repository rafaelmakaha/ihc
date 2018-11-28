import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia, Button, Grid } from '@material-ui/core';
import filtro_barro from '../Assets/filtro_barro.jpg'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CartService from '../Services/CartService';



export default class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            json: this.props.json
        }
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
                </CardContent>
            </Card >
        )
    }
}
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia, Button } from '@material-ui/core';


export default class Produto extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: this.props.nome,
            preco: this.props.preco,
            img: this.props.img,
        }

    }

    render(){
        const styles = () => ({
            image: {
                width: 151,
                height: 151
            }
        })
        return(
            <Card >
                <CardContent>
                    <CardMedia className={styles.image} image={this.state.img} title="Teste"/>
                    <Typography variant="body1">
                        {this.state.nome}
                    </Typography>
                    <Typography variant="h6">
                        R$: {this.state.preco},00
                    </Typography>
                    <Button variant="contained" color="secondary" size="small" >Comprar</Button>
                </CardContent>
            </Card >
        )
    }
}
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia, Button, Grid, CardActionArea } from '@material-ui/core';

import AnnounceDetail from './AnnounceDetail';
import CustomizedModal from './CustomizedModal';
// import CardActions from '@material-ui/core/CardActions';

//IMAGENS
import filtro_barro from '../Assets/filtro_barro.jpg'
import ozonizador_0 from '../Assets/ozonizador_0.png'
import purificador_0 from '../Assets/purificador_0.jpg'
import bebedouro_galao_0 from '../Assets/bebedouro_galao_0.jpg'
import bebedouro_pressao_0 from '../Assets/bebedouro_pressao_0.jpg'

export default class Produto extends Component {
    constructor(props){
        super(props);
        this.state = {
            open1: false,
            open2: false,
            json: this.props.json
        }
        this.openModal1 = this.openModal1.bind(this);
        this.closeModal1 = this.closeModal1.bind(this);
        this.openModal2 = this.openModal2.bind(this);
        this.closeModal2 = this.closeModal2.bind(this);
    }

    openModal1() {
        this.setState({ open1: true });
    };
    closeModal1() {
        this.setState({ open1: false });
    };
    openModal2() {
        this.setState({ open2: true });
    };
    closeModal2() {
        this.setState({ open2: false });
    };


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
                width: 151,
                height: 151
            }
        }
        return(
            <Card >
                {/* <CardContent> */}
                <CardActionArea onClick={this.openModal1}>
                    <CardContent>
                        <Grid container>
                            {/* <Grid item xs={3}></Grid> */}
                            <Grid item xs={12}>
                                <CardMedia style={styles.image} image={this.getImage(this.state.json.img)} title="Teste"/>
                                <Typography variant="body1">
                                    {this.state.json.nome}
                                </Typography>
                                <Typography variant="h6">
                                    R$: {this.state.json.preco}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                    <CustomizedModal open={this.state.open1} onClose={this.closeModal1}>
                        <AnnounceDetail json={this.state.json} />
                    </CustomizedModal>
                    <Grid container spacing={16}>
                        <Grid item xs={6}></Grid>
                          <Grid item>
                            <Button variant="contained" color="secondary" size="small" onClick={this.openModal2}>Remover</Button>
                            </Grid>
                        <CustomizedModal open={this.state.open2} onClose={this.closeModal2}>
                            <Typography variant="h4" >Anúncio removido com sucesso.</Typography><br/>
                            <Button variant="contained" color="primary" onClick={this.closeModal2}>Ok</Button>
                        </CustomizedModal>
                    </Grid>
            </Card >
        )
    }
}

import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {
    CardContent,
    Typography,
    Grid,
    Button,
} from '@material-ui/core';
import Auth from '../Authentication/Auth';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            teste: ""
        }
    }

    login(){
        Auth.login();
    }

    render(){
        return(
            <Card>
                <CardContent>
                    <Grid container direction="row">
                        <Grid item xs={9}>
                            <Typography variant="h4">João Genérico da Silva</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography align="right">
                            <Button variant="contained" size="small" color="primary" >Editar Perfil</Button>
                            </Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <Typography variant="h7"><b>E-mail:</b> makahaogod@gmail.com</Typography>
                    <br/>
                    <Typography variant="h5">Descrição</Typography>
                    <br/>
                    <Typography variant="p">Um dia eu tive a brilhante
                    ideia de fazer uma excursão no deserto. Numa noite,
                    minha caravana estava toda lá quando fui dormir, porém, quando
                    abri meus olhos, todos tinham desaparecido, como se tivessem
                    sido levados pelas areias do deserto. E junto com eles foram-se mapa,
                    alimentos, roupas, camelos, e principalmente, a água. Eu já estava
                    sentido a sede me invadir.</Typography>
                    <br/>
                    <Typography variant="p">Comecei a me desesperar, correr em
                    uma direção só, na esperança de um milagre. Quando comecei a sentir os
                    sintomas da desidratação e perceber que esse deserto seria meu leito
                    de morte, eu me deparo com um celular quase que completamente coberto pela
                    areia. Ele estava aberto em uma página, a página deste incrível site.
                    </Typography>
                    <br/>
                    <Typography variant="p">Logo
                    vi que tinha uma promoção imperdível de um filtro de barro que eu sempre
                    quis, nao podia esperar, encomendei na hora mesmo. E em pouco tempo saciei minha
                    sede com o belíssimo produto que comprei. Portanto, posso dizer que esse site
                    salvou minha vida.
                    </Typography>
                    <br/>
                    <Typography variant="h5">Endereço: </Typography>
                    <Typography variant="body1">CEP: 711000-000</Typography>
                    <Typography variant="body1">Cidade: Brasilia</Typography>
                    <Typography variant="body1">Bairro: Gama</Typography>
                </CardContent>
            </Card>
        )
    }
}

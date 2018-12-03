import React, { Component } from 'react';
import {
    Grid,
    Card,
    Typography,
} from '@material-ui/core';
import Announce from '../Components/Announce';
import { meus_anuncios } from '../Resources/meus_anuncios.json';


export default class MyAnnounces extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false,
            meus_anuncios: meus_anuncios
        }
    }

    render(){
        return (
            <Card>
                <Typography variant="h4">Meus Anúncios:</Typography>
                <br></br>
                <Grid container>
                    <Grid item>
                        <Announce json={this.state.meus_anuncios[0]} />
                    </Grid>
                    <Grid item>
                        <Announce json={this.state.meus_anuncios[1]} />
                    </Grid>
                    <Grid item>
                        <Announce json={this.state.meus_anuncios[2]} />
                    </Grid>
                </Grid>
                <br></br>
            </Card>
        )
    }
}

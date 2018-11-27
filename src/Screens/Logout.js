import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';
import { 
    CardContent,
    Typography,
    Grid,
} from '@material-ui/core';
import Auth from '../Authentication/Auth';

export default class Logout extends Component {
    render(){
        Auth.logout();
        return(
            <Card >
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <CardContent >
                            <Typography variant="h4" >Você foi deslogado com sucesso!</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}
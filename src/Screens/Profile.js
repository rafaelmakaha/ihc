import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { 
    CardContent,
    Typography,
    Grid,
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
            <Card >
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography variant="h3" >Página não implementada!</Typography> 
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}
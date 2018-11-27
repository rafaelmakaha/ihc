import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';
import { 
    CardContent,
    Typography,
    Button,
    TextField,
    Grid,
} from '@material-ui/core';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleClickLogin(){
        this.props.handleClickLogin();
    }
    render(){
        return(
            <Card >
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography variant="h3" >Login</Typography>
                            <CardContent>
                                <TextField id="login_email" label="E-mail" fullWidth/>
                            </CardContent>
                            <CardContent>
                                <TextField id="login_pw" type="password" label="Senha" fullWidth/>
                            </CardContent>
                            <CardContent>
                                <Button variant="contained" color="secondary" type="login" onClick={this.handleClickLogin} component={Link} to='/'>Login</Button>
                            </CardContent>  
                        </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography variant="h3" >Registro</Typography>
                            <CardContent>
                                <TextField id="regist" label="E-mail" fullWidth/>
                            </CardContent>
                            <CardContent>
                                <TextField id="regist_pw" type="password" label="Senha" fullWidth/>
                            </CardContent>
                            <CardContent>
                                <TextField id="regist_pw_verify" type="password" label="Senha" fullWidth/>
                            </CardContent>
                            <CardContent>
                                <Button variant="contained" color="secondary" type="register">Registrar</Button>
                            </CardContent>  
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}
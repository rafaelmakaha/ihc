import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { 
    CardContent,
    Button,
    TextField,
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
        const styles = () => ({
            image: {
                width: 151,
                height: 151
            }
        })
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
                                <Button variant="contained" color="secondary" type="login" onClick={this.login}>Login</Button>
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
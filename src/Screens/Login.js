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
import Auth from '../Authentication/Auth';
import CustomizedModal from '../Components/CustomizedModal';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    openModal() {
        this.setState({ open: true });
    };
    closeModal() {
        this.setState({ open: false });
    };

    handleClickLogin(){
        Auth.handleLoginAuth();
        this.openModal();
        
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
                                <Button variant="contained" color="secondary" type="login" onClick={this.handleClickLogin}>Login</Button>
                                <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                                    <Typography variant="h4" >Login realizado com sucesso!</Typography>
                                    <Button variant="contained" color="Secondary" component={Link} to='/'>Ok</Button>
                                </CustomizedModal>
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
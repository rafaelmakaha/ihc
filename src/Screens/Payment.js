import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { 
    CardContent,
    Typography,
    Button,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import Auth from '../Authentication/Auth';


export default class Payment extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: "",
        }

        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClickLogin(){
        Auth.handleLoginAuth();
    }

    handleChange = event => {
        this.setState({ valor: event.target.value });
      };
    
    render(){
        const mui_theme = createMuiTheme ({
            palette: {
                primary: green,
            }
        })
        return(
            <Card >
                <CardContent>
                    <Typography variant="h4" align="center">Finalizar Compra</Typography>
                    <br></br>
                    <Typography variant="h6" align="left">Selecione o método de pagamento:</Typography>
                    <FormControl component="fieldset" >
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        value={this.state.valor}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="cartao" control={<Radio />} label="Cartão" />
                        <FormControlLabel value="boleto" control={<Radio />} label="Boleto" />
                        <FormControlLabel value="outro" control={<Radio />} label="Outros" />
                    </RadioGroup>
                    </FormControl>
                    <br></br>
                    <br></br>
                    <Typography variant="h6" align="left">Valor Total:</Typography>
                    <br></br>
                    <MuiThemeProvider theme={mui_theme}>
                        <Button variant="contained" color="primary">Finalizar Compra</Button>
                    </MuiThemeProvider>
                </CardContent>
            </Card>
        )
    }
}
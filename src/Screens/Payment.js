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
import CartService from '../Services/CartService';
import CustomizedModal from '../Components/CustomizedModal';
import {Link} from 'react-router-dom';


export default class Payment extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            valor: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.clearCarts = this.clearCarts.bind(this);
    }

    openModal() {
        this.setState({ open: true });
    };
    closeModal() {
        this.setState({ open: false });
    };

    clearCarts(){
        CartService.clearCarts();
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
                    <Typography variant="h6" align="left">Valor Total: {CartService.getValue()}</Typography>
                    <br></br>
                    <MuiThemeProvider theme={mui_theme}>
                        <Button variant="contained" color="primary" onClick={this.openModal}>Finalizar Compra</Button>
                        <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                            <Typography variant="h4">Compra realizada com sucesso!</Typography>
                            <Button variant="contained" color="primary" onClick={this.clearCarts} component={Link} to='/'>Ok</Button>
                        </CustomizedModal>
                    </MuiThemeProvider>
                </CardContent>
            </Card>
        )
    }
}
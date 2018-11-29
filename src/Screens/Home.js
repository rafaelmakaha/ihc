import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Produto from '../Components/Produto';
import CustomizedModal from '../Components/CustomizedModal';
import Login from './Login';
import { produtos } from '../Resources/produtos.json';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false,
            produtos: produtos
        }
    }

    render(){
        return (
        <div>
            <Grid container spacing={16}>
                <Grid item>
                    <Produto json={this.state.produtos[0]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.produtos[1]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.produtos[2]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.produtos[3]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.produtos[4]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.produtos[5]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.produtos[6]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.produtos[7]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.produtos[8]} />
                </Grid>
                <Grid item>
                    <Produto json={this.state.produtos[9]} />
                </Grid>
            </Grid>
            <CustomizedModal open={this.state.open} onClose={this.closeModal}>
                <Login />
            </CustomizedModal>
        </div>
        )
    }
}
import React, { Component } from 'react';
import {
    Typography,
    List,
    ListItem
} from '@material-ui/core';

export default class Sobre extends Component {
    render(){
        return (
          <div>
            <Typography variant="h3">Surgimento da empresa</Typography>
            <br/>
            <Typography variant="h6">Nossa empresa surgiu em meados de 2018, quando um de nossos
            fundadores, o gênio Rafael Makaha
            pensou em realizarmos um site de venda de filtros e bebedouros de qualidade inimaginável. Essa
            ideia foi prontamente aceita pelos outros dois sócios: João Vítor Morandi e Rômulo Souza.</Typography>

            <Typography variant="h6">No início, surgiram várias dificuldades, mas com a ajuda de investidores e com a ampla
            divulgação promovida com a apresentação do site na matéria de Interação Humano-Computador (IHC), a
            empresa começou a tomar forma, e as pessoas, sedentas para adquirir filtros e bebedouros incríveis
            e maravilhosos, começaram a entrar em contato.</Typography>

            <Typography variant="h6">Em pouco tempo, a FGAcqua começou a crescer exponencialmente, se tornando a empresa
            multinacional que conhecemos hoje. Então não se esqueça, se tiver um sonho, por mais absurdo que
            seja, nunca desista, que um dia ele pode se tornar realidade.</Typography>
            
            <br/>
            <Typography variant="h3">Membros</Typography>

            <List>
                <ListItem>
                    <Typography variant="h6">João Vítor Morandi - Sócio</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6">Rafael Makaha - Sócio</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6">Rômulo Vinícius - Sócio</Typography>
                </ListItem>
            </List>
        </div>
        )
    }
}

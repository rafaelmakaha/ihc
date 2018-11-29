import React, { Component } from 'react';
import {
    CardContent,
    Typography,
    Button,
    TextField,
    Grid,
} from '@material-ui/core';

export default class Sobre extends Component {
    render(){
        return (
          <div>
            <Typography variant="h3">Surgimento da empresa</Typography>
            <br/>
            <Typography variant="p">Nossa empresa surgiu em meados de 2018, quando um de nossos
            fundadores, o gênio Rafael Makaha
            pensou em realizarmos um site de venda de filtros e bebedouros de qualidade inimaginável. Essa
            ideia foi prontamente aceita pelos outros dois sócios: João Vítor Morandi e Rômulo Souza.</Typography>

            <Typography variant="p">No início, surgiram várias dificuldades, mas com a ajuda de investidores e com a ampla
            divulgação promovida com a apresentação do site na matéria de Interação Humano-Computador (IHC), a
            empresa começou a tomar forma, e as pessoas, sedentas para adquirir filtros e bebedouros incríveis
            e maravilhosos, começaram a entrar em contato.</Typography>

            <Typography variant="p">Em pouco tempo, a FGAcqua começou a crescer exponencialmente, se tornando a empresa
            multinacional que conhecemos hoje. Então não se esqueça, se tiver um sonho, por mais absurdo que
            seja, nunca desista, que um dia ele pode se tornar realidade.</Typography>

            <h2>Membros</h2>

            <ul>
              <li>João Vítor Morandi - Sócio</li>
              <li>Rafael Makaha - Sócio</li>
              <li>Rômulo Vinícius - Sócio</li>
            </ul>
        </div>
        )
    }
}

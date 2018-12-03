import React, { Component } from 'react';
import oferta from '../Assets/oferta.png';
import {
    Card,
    CardMedia,
} from '@material-ui/core';

export default class Banner extends Component {
    render(){
        const styles = {
            card: {
                maxWidth: 400,
            },
            image: {
                height: 0,
                paddingTop: '25%', // 16:9,
                marginTop:'30'
              }
        }
        return(
            <Card>
                <CardMedia
                    style={styles.image}
                    image={oferta}
                    title="Oferta"
                />
            </Card>
        )
    }

}
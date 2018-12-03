import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import oferta from '../Assets/oferta.png';
import {
    Card,
    CardMedia,
    CardActionArea,
    Button,
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
                <CardActionArea>
                    <CardMedia
                        style={styles.image}
                        image={oferta}
                        title="Oferta"
                        component={Link} to='/oferta'
                    />
                </CardActionArea>
            </Card>
        );
    }

}
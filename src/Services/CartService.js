import React, { Component } from 'react';


export default class CartService extends Component {
    constructor(props){
        super(props);

        this.addCart = this.addCart.bind(this);
        this.getCarts = this.getCarts.bind(this);
    }

    static addCart(cart){
        var list = this.getCarts();
       
        console.log('entrou no addCart');
        console.log('cart = ',cart);
        console.log('list = ' + list);

        try{
            list.push(cart);
        } catch(e){
            list = [cart];
        }
        
        list = JSON.stringify(list);

        console.log('list json = ',list );

        localStorage.setItem('carts',list);
    }

    static getCarts(){
        let list = localStorage.getItem('carts');

        let parsedList = JSON.parse(list);

        return parsedList;
    }

    static clearCarts(){
        localStorage.clear();
    }

    render(){
        return (
        <div>
            <span>EOQ</span>
        </div>
        )
    }
}
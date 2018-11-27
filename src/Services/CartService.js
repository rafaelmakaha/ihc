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
        // this.clearCarts();
        let list = localStorage.getItem('carts');
        let parsedList = null;
        
        try{
            parsedList = JSON.parse(list);
        }catch(e){
            parsedList = [list];
        }

        return parsedList;
    }

    static removeCart(cart){
        let list = this.getCarts();
        let newList = [];

        try{
            list.forEach(element => {
                if(element.nome !== cart.nome){
                    newList.push(element);
                }
            });
            var newListjson = JSON.stringify(newList);
            console.log('newlist = ',newList);
            localStorage.setItem('carts',newListjson);
            // return newList;
        }catch(e){
            console.log("removecart exception");
            this.clearCarts();
            // return null;
        }
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
import React, { Component } from 'react';
import Auth from '../Authentication/Auth';


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
                if(element.id !== cart.id){
                    newList.push(element);
                } else {
                    this.removeValue(cart.preco, cart.quantidade);
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
        // localStorage.setItem('historico', null);
        if(Auth.logged() === 'true')
            this.setHistorico();
        localStorage.setItem('carts',null);
        localStorage.setItem('valorTotal','0,00');
    }

    static setHistorico(){
        var carts = this.getCarts();
        var list = this.getHistorico();
        
        console.log('set historico-> carts= ', carts, ' list = ', list)
        // try{
        //     list.push(cart);
        // } catch(e){
        //     list = [cart];
        // }
        try{
            carts.forEach(element => {
                try{
                    list.push(element);
                }catch{
                    list = [element]
                }
            });
        }catch{
            try{
                list.push(carts);
            }catch{
                list = [carts];
            }
        }
        
        list = JSON.stringify(list);

        console.log('list json = ',list );

        localStorage.setItem('historico', list)
    }

    static getHistorico(){
        let list = localStorage.getItem('historico');
        let parsedList = null;
        
        try{
            parsedList = JSON.parse(list);
        }catch(e){
            parsedList = [list];
        }

        return parsedList;
    }

    static getValue(){
        var total = "0,00";
        
        try{
            var aux = localStorage.getItem('valorTotal');
            if(aux === null || aux === ''){
                localStorage.setItem('valorTotal',"0,00");
                console.log('if, aux = ', aux);
            } else {
                total = aux;
            }
            console.log('try, total = ', total);
        }catch{
            localStorage.setItem('valorTotal',"0,00");
            console.log('catch, total 2 = ', total);
        }

        return total;
    }

    static addValue(value, quantity){
        var total = this.getValue();
        total = parseFloat(total.replace(",", "."));
        value = parseFloat(value.replace(",", "."));
        quantity = parseInt(quantity);

        total += value * quantity;

        var output;
        if (Number.isInteger(total)) { 
            output =  total + ",00";
        }else{
            output = total.toString(); 
            output = output.replace(".",",");
        }

        console.log('addValue -> output = ', output);

        localStorage.setItem('valorTotal',output);
    }

    static removeValue(value, quantity){
        var total = this.getValue();

        console.log("quantidade string = ", quantity);
        quantity = parseInt(quantity);
        console.log("quantidade int = ", quantity);
        total = parseFloat(total.replace(",", "."));
        value = parseFloat(value.replace(",", "."));

        console.log("total antes = ", total);
        total -= value*quantity;
        console.log("total dps = ", total);
        
        var output;
        if (Number.isInteger(total)) { 
            output =  total + ",00";
        }else{
            output = total.toString(); 
            output = output.replace(".",",");
        }

        localStorage.setItem('valorTotal',output);
    }

    render(){
        return (
        <div>
            <span>EOQ</span>
        </div>
        )
    }
}
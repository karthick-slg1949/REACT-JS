import React, { Component, Fragment } from 'react'
import Cart from './Cart'


export class Product extends Component {
    Product;
    constructor(props){
        super(props);
        console.log("First - Constructor");
        this.Product={
            pid:101,
            pname:"POCO X4 Pro 5G",
            price:19000,
            img :"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x4-pro.jpg"
        }
        
    }
  render() {
    console.log("second - Render");
    
    return (
      <React.Fragment>
        <h2>Product Component</h2>
        <Cart Product={this.Product} />
        <img src={this.Product.img} />
      </React.Fragment>
    )
  }
}

export default Product
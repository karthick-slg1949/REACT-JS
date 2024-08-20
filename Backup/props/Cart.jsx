import React from 'react'

let Cart = (props) => {
  return (
    <React.Fragment>
        <h2>Cart Component</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Product_Id:{props.Product.pid}</h3>
        <h3>product_Name:{props.Product.pname}</h3>
        <h3>Product_Price:{props.Product.price}</h3>
        <img src={props.Product.img} />
    </React.Fragment>
  )
}

export default Cart
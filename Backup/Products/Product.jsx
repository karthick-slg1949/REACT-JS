import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrAction, incrAction } from '../../src/redux/product/Product.action'

const Product = () => {
    let dispatch=useDispatch()
    let product=useSelector((state)=>{
      return state

    })

    let incrHandler=()=>{
        dispatch(incrAction())

    }
    let decrHandler=()=>{
        dispatch(decrAction())

    }
  return (
    <div>
        <img src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png" alt="" />
        <pre>{JSON.stringify(product)}</pre>
        <h4>value:{product.qty}</h4>
        <button onClick={incrHandler}>+</button>
        {product.qty}
        <button onClick={decrHandler}>-</button>
        {Product.qty}
    </div>
  )
}

export default Product
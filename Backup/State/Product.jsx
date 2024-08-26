import React ,{Fragment, useState} from 'react'

let Product=()=>{
    let [qty,setQty]=useState(1)
    let incrHandler=()=>{
        setQty(qty + 1)
    }
    let decrHandler=()=>{
        setQty(qty - 1)
    }
    return <Fragment>
        <h2>Product:{qty}</h2>
        <button onClick={incrHandler}>+</button>
        <button onClick={decrHandler}>-</button>

    </Fragment>
}
export default Product

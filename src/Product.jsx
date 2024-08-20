import React, { useState } from 'react'
import './Message/Message.css'

const Product = () => {
    let [Name,setName]=useState('test')

    let updateHandler=(Product_Name)=>{
        setName(Product_Name)
        
    }
  return (
    <div>
        <h2>Product Name:{Name}</h2>
        <img src="https://images-cdn.ubuy.co.in/65cc10642c8256014c17dccd-xiaomi-poco-x4-pro-5g-6-67-034.jpg" alt="poco x4" className ={'hello'} onClick={updateHandler.bind(null,"Poco X4 Pro 5g")} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WMA3I3_hjV12zDidiCObQePxQQJLiHBzXQiuIAX0WAyrRO2u-6Lz7S4hwGkVKR7u6Mg&usqp=CAU" alt="Poco X6 Neo 5g"  onClick={updateHandler.bind(null,"poco x6 Neo")} />
    </div>
  )
}

export default Product
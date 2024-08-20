import React from 'react'
import './Message.css'

const Message = () => {
    let msgStyles_internal={color:"blue" }
  return (
    <div>
        <h3 style={{color:'blue'}}>Good Morning</h3>
        <h3 style={msgStyles_internal}>Good Afternoon</h3>
        <h3 style={msgStyles_internal}>Good Evening</h3>
        <h3 className='msgStyle2'>Good Night</h3>
    </div>
  )
}

export default Message
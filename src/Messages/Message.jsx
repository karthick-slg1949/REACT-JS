import React from 'react'
import {gmaction,gaaction,geaction,gnaction} from '../REDUX/message/Message.action'
import { useDispatch, useSelector } from 'react-redux'


let Message=()=>{
let dispatch=useDispatch();
let message=useSelector((state)=>{
    return state
})

let gmHandler=()=>{
    dispatch(gmaction())
}
let gaHandler=()=>{
    dispatch(gaaction())
}
let geHandler=()=>{
    dispatch(geaction())
}
let gnHandler=()=>{
    dispatch(gnaction())
}

  return (
    <div>
        <h2>Message Component</h2>
        <pre>{JSON.stringify(message)}</pre>
        <h4>Value:{message.msg}</h4>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gaHandler}>GA</button>
        <button onClick={geHandler}>GE</button>
        <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message
import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    let [user,setUser]=useState({email:"",password:""})
  let updateHandler=(event)=>{
    setUser({...user,email:event.target.value})

  }
  let submitHandler=(event)=>{
    event.preventDefault()
    console.log(user);
    

  }
  return (
    <div className='container'>
        <h2>Login Page</h2><hr />
        <form onSubmit={submitHandler}>
            Email: <input type="text" onChange={updateHandler} name='email'/><br /><br />
            Password: <input type="text" onChange={updateHandler} name="password" /><br /><br />
            <button type='submit' value={Login}>Login</button>
            {/* <input type="submit" value={Login} /> */}
            
        </form>   
    </div>
  )
}

export default Login
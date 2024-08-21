import React, { useState } from 'react'

const Login = () => {
  let [user,setuser]=useState({email:"",password:""})
  let emailHandler=(event)=>{
    setuser({...user,email:event.target.value})
  }
  let passwordHandler=(event)=>{
    setuser({...user,password:event.target.value})
  }
  return (
    <div className='container'>
   
      <div className='row'>
        <div className='col-md-4'>
      <h2>Login Page</h2><hr />
      <pre>{JSON.stringify(user)}</pre>
        <form>
          <div className='form-group'>
            <label htmlFor="">Email</label><input type="email" onChange={emailHandler} className='form-control'/><br />
          </div>

          <div className='form-group'>
            <label htmlFor="">Password</label><input type="password" onChange={passwordHandler} className='form-control'/><br />
          </div>
          
         <button type='submit' value={Login} className='btn btn-success'>Login</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Login
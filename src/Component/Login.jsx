import React, { useState } from 'react'
import  {FaEyeSlash,FaEye} from 'react-icons/fa'

const Login = () => {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[showPassword,setShowpassword]=useState(false);

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const togglePasswordVisiblity=(e)=>{
        setShowpassword(!showPassword);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //Handle login logic here
    }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' value={email} onChange={handleEmailChange}  required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password"  id="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <span onClick={togglePasswordVisiblity}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login
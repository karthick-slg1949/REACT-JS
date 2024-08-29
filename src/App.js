import React from 'react'
import { Link,BrowserRouter } from 'react-router-dom'
import Reg from './Component/Reg'
// import Registration from './Component/Registration'
// import Hooks from './Hooks'
import Login from './Component/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav className='navbar navbar-dark bg-dark '>
        <Link to='/index' className='navbar-brand '>Login</Link>
      </nav>
      <Reg/>
      {/* <Registration/> */}
      </BrowserRouter>
      {/* <Login/> */}
      {/* <Hooks/> */}
    </div>
  )
}

export default App
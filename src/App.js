import React from 'react'
import { Link,BrowserRouter } from 'react-router-dom'
import Registration from './Component/Registration'
import Hooks from './Hooks'

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
      <nav className='navbar expand-lg navbar-dark bg-dark '>
        
        <Link to='/index' className='navbar-brand '>Registration</Link>
        
      </nav>
      <Registration/>
      </BrowserRouter> */}
      <Hooks/>
    </div>
  )
}

export default App
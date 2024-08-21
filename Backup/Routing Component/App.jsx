import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Login from './Login'
import User from './User'

const App = () => {
  return (
    <div>
        <Router>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="/index" className='navbar-brand'>Logo</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to="/index" className='nav-link'>Home</Link></li>
                    <li><Link to="/about" className='nav-link'>About</Link></li>
                    <li><Link to="/service" className='nav-link'>Service</Link></li>
                    <li><Link to="/contact" className='nav-link'>Contact</Link></li>
                    <li><Link to="/login" className='nav-link'>Login</Link></li>
                    <li><Link to="/user" className='nav-link'>User</Link></li>
                </ul>
            </div>
            </nav>
            <Routes>
            <Route path="index" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="user" element={<User/>}/>
        </Routes>
        
        </Router>
    </div>
  )
}

export default App
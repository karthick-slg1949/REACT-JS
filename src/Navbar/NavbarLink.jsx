import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg' >
          <Link to="/index" className='navbar-brand'>Routing EX</Link>
          <div className='ml-auto'>
            <ul className='navbar-nav'>
              <li><Link to="/index" className='nav-link'>Home</Link></li>
              <li><Link to="/about" className='nav-link'>About</Link></li>
              <li><Link to="/contact" className='nav-link'>Contact</Link></li>
              <li><Link to="/service" className='nav-link'>Service</Link></li>
              <li><Link to="/login" className='nav-link'>Login</Link></li>
            </ul>
          </div>
        </nav>
        
    </div>
  )
}

export default Navbar
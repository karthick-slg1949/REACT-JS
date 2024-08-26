import NavbarLink from './Navbar/NavbarLink'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Navbar/RoutingComponents/Home'
import About from './Navbar/RoutingComponents/About'
import Contact from './Navbar/RoutingComponents/Contact'
import Service from './Navbar/RoutingComponents/Service'
import Login from './Navbar/RoutingComponents/Login'
import UserLogin from './UserLogin'
import Register from'./Navbar/RoutingComponents/Register'

let App = ()=>{
  return <div>
     <Router>
     <NavbarLink />
     <Routes>
            <Route path="index" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            {/* <Route path="UserLogin" element={<UserLogin/>}/> */}
            
        </Routes>
     </Router>
     
  </div>
}
export default App

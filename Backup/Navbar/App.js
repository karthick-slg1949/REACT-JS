import NavbarLink from './Navbar/NavbarLink'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../Backup/Components/Home'
import About from '../Backup/Components/About'
import Contact from '../Backup/Components/Contact'
import Service from '../Backup/Components/Service'
import Login from '../Backup/Components/Login'

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
            
            
        </Routes>
     </Router>
  </div>
}
export default App

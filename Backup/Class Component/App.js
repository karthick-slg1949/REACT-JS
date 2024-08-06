import React from 'react'
import Header from '../Backup/Class Component/Header'
import Footer from '../Backup/Class Component/Footer'
import Service from '../Backup/Class Component/Service'

class App extends React.Component{
    render(){
        return <div>
            <h1>App Component</h1><hr />
             <Header/>
            <Footer/>
            <Service/>
            
        </div>
    }
}
export default App
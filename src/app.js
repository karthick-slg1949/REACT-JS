import React from 'react'
import Header from './Class Component/Header'
import Footer from './Class Component/Footer'
import Service from './Class Component/Service'
import Message from './Message Class Component/Message'
import Movie from './Movie Component/Movie'

class App extends React.Component{
    render(){
        return <div>
            {/* <h1>App Component</h1><hr /> */}
            {/* <Header/>
            <Footer/>
            <Service/>
            <Message/> */}
            <Movie/>
        </div>
    }
}
export default App
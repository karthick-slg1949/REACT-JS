// import React, { Component } from 'react'

// export class Message extends Component {
//     msg="LEO"

//     gmHandler=()=>{
//         this.msg="Vijay"
//         this.forceUpdate()

//     }
//     gnHandler=()=>{
//         this.msg="Trisha"
//         this.forceUpdate()
//     }
//   render() {
//     return (
//       <div>
//         <h1>Message State</h1><hr />
//         <h2>Movie:{this.msg}</h2>
//         <button onClick={this.gmHandler} className='btn btn-primary'>Hero</button>
//         <button onClick={this.gnHandler} className='btn btn-success ' >Heroine</button>
//       </div>
//     )
//   }
// }

// export default Message

//using setstate method
import React from 'react'

 class Message extends React.Component {
  state={
    msg:"Maharaja"
  }
  gmHandler=()=>{
    this.setState({msg:"VJS"})
  }
  gnHandler=()=>{
    this.setState({msg:"Altimate"})
  }
  render() {
    return (
      <div>
        <h2>Movie:{this.state.msg}</h2>
        <button onClick={this.gmHandler} className='btn btn-primary'>Hero</button>
        <button onClick={this.gnHandler} className='btn btn-success'>Story</button>
      </div>
    )
  }
}

export default Message
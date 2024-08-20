// import React, { Component } from 'react'

// export class HandlerUpdate extends Component {
//     state={
//         msg:"Hey"
//     }
//     updateHandler=(Value)=>{
//         this.setState({msg:Value})
//     }
//   render() {
//     return (
//       <div style={{textAlign:"center", fontFamily:"fantasy" } }>
//         <h2 className='text-primary'>Handler Update</h2><hr />
//         <h3 className='text-danger'>Value:{this.state.msg}</h3>
//         <button onClick={this.updateHandler.bind(this,"Good Morning")} className='btn btn-primary'>GM</button>
//         <button onClick={this.updateHandler.bind(this,"Good Afternoon")}className='btn btn-success'>GA</button>
//         <button onClick={this.updateHandler.bind(this,"Good Evening")}className='btn btn-primary'>GE</button>
//         <button onClick={this.updateHandler.bind(this,"Good Night")}className='btn btn-success'>GN</button>
//       </div>
//     )
//   }
// }

// export default HandlerUpdate

import React, { useState } from 'react'

function HandlerUpdate() {
    let [state,setState]=useState("Welcome")
    let updateHandler=(Value)=>{
        
        setState(Value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1 className='text-success'>HandlerUpdate</h1><hr />
        <h3 className='text-danger'>Value:{state}</h3>

        {/* FatArrow functio */}
        <button onClick={()=>{setState("Good Morning")}} className='btn btn-primary'>GM</button>
        <button onClick={()=>{setState("Good Afternoon")}} className='btn btn-success'>GA</button>
       
        {/* updateHandler */}
        <button onClick={updateHandler.bind(this,"Good Evening")} className='btn btn-primary'>GE</button>
        <button onClick={updateHandler.bind(this,"Good Night")} className='btn btn-success'>GN</button>
    </div>
  )
}

export default HandlerUpdate
// import React, { Component } from 'react'

// export class Counter extends Component {
//     // Counter=1
//     state={
//         Counter:1
//     }
//     incrHandler=()=>{
//         this.setState({Counter: this.state.Counter + 1})

//     }
//     decrHandler=()=>{
//         this.setState({Counter: this.state.Counter - 1})

//     }
//   render() {
//     return (
//       <div style={{textAlign:'center'}}>
//         <h2 className='text-primary' style={{fontFamily:'sans-serif'}}>Counter Component</h2><hr />
//         <h3>Counter Value:{this.state.Counter}</h3><br />
//         <button onClick={this.incrHandler} className='btn btn-primary' >Increment</button>
//         <button onClick={this.decrHandler}className='btn btn-success'>Decrement</button>
//       </div>
//     )
//   }
// }

// export default Counter


     //Function Method

import React, { useState } from 'react'

function Counter() {
  let [count,setcount]=useState(1)
let  incrHandler=()=>{
    setcount(count + 1)
  }
    let descHandler=()=>{
      setcount(count- 1)
  }
  return (
    <div style={{textAlign:"center"}}>
      <h2 className='text-primary'>Counter Component</h2><hr />
      <h3 className='text-danger'>Count:{count}</h3>
      <button onClick={incrHandler} className='btn btn-primary'>+</button>
      <button onClick={descHandler}className='btn btn-success'>-</button>
    </div>
  )
}

export default Counter
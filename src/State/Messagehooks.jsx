                                       //Function Method

// import React, { useState } from 'react'

// function Messagehooks() {
//     let [msg,setMsg]=useState('Hello')
//      let gmHandler=()=>{
//         setMsg('Good Morning')
//     }
//      let gnHandler=()=>{
//         setMsg('Good Night')
//     }
//   return (
//     <div style={{textAlign:'center'}}>
//         <h2>Message Hooks</h2><hr />
//         <h2 className='text-primary'>Message Value:{msg}</h2>
//         <button onClick={gmHandler} className='btn btn-primary'>GM</button>
//         <button onClick={gnHandler} className='btn btn-success'>GN</button>
//     </div>
//   )
// }

// export default Messagehooks

import React, { useState } from 'react'

function Messagehooks() {
    let [msg,arr]=useState('Hello')
     let gmHandler=()=>{
      arr('Good Morning')
    }
     let gnHandler=()=>{
        arr('Good Night')
    }

    
  return (
    <div style={{textAlign:'center'}}>
        <h2>Message Hooks</h2><hr />
        <h2 className='text-primary'>Message Value:{msg}</h2>
        <button onClick={gmHandler} className='btn btn-primary'>GM</button>
        <button onClick={gnHandler} className='btn btn-success'>GN</button><br />
        <button onClick={()=>{arr('Good Evening')}} className='btn btn-danger'>GE</button>
    </div>
  )
}

export default Messagehooks
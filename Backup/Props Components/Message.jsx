// import Msg from './Msg'
// let Message=()=>{
//     let GM="good morning"
//     return <div>
//         <h1>Message Component</h1>
//         <Msg Wish={GM}/>

//     </div>
// }
// export default Message

import React from "react";
import Msg from './Msg'

class Message extends React.Component{

    render (){
        let GM="Good Evening"
        let Employee={
            eid:101,
            ename:'karthick',
            esal:55000
        }
        return <div>
            <h1>Message Component</h1>
            <Msg Wish={GM} Emp={Employee}/>
        </div>
    }
}
export default Message




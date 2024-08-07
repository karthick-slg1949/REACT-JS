// let msg=(props)=>{
//     return <div>
//         <h3>Whish:{props.Wish}</h3>
//     </div>
// }
// export default msg

import React from "react";
 class Msg extends React.Component{
    
    render (){
        return <div>
            <h3>Whish:{this.props.Wish}</h3>
            <h3>Employee Details:{JSON.stringify(this.props.Emp)}</h3>

    </div>
 }
}
export default Msg
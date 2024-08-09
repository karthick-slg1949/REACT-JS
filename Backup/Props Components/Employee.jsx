let Employee=(props)=>{
    return <div>
        <h2>Employee Component</h2>
        <pre>{JSON.stringify(props)}</pre><hr />
        <h3>User Id:{props.User_Id}</h3>
        <h3>User Name:{props.User_Name}</h3>
        
        </div>
}   
export default Employee

// import React from "react";

// class Employee extends React.Component{
//     render() {
//         return <div>
//             <h2>Employee Component</h2>
//             <pre>{JSON.stringify(this.props)}</pre>
//             <h3>User Id:{this.props.user_Id}</h3>
//             <h3>User Name:{this.props.user_Name}</h3>
//         </div>
//     }
// }
// export default Employee
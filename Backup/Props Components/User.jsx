import Employee from "./Employee"

let User=()=>{
    let uid=101;
    let uname="Alagar";
    return <div>
        <h2>User Component</h2><hr />
        <Employee  User_Id={uid} User_Name={uname} />
    </div>
}
export default User

// import React from "react";
// import Employee from "./Employee";

// class User extends React.Component{
//      uid=101;
//      uname="karthick";
//     render(){
//         return <div>
//             <h2>User Component</h2>
//             <Employee user_Id={this.uid}user_Name={this.uname}/>

//         </div>
//     }
// }
// export default User
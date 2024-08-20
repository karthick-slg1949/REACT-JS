import  Axios  from 'axios'
import React, { useState } from 'react'

const Users = () => {
    let[Users,setUsers]=useState([])

    let getUsers=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp);
            console.log(resp.data);
            setUsers(resp.data)
        })
        .catch((err)=>{
            console.log(err.msg);  
        })
    }
  return (
    <div>
        <h2>User Component</h2>
        <pre>{JSON.stringify(Users)}</pre>
        <button onClick={getUsers}className='btn btn-success mb-3'>Get Users</button>
        
        <table className='table'>
            <thead className='bg-dark text-white'>
                <th>Id</th>
                <th>Name</th>
                <th>email</th>
                <th>City</th>
            </thead>
            <tbody>
            {
            Users.length > 0 ? <> 
            {
                Users.map((user, index)=>{
                 return<tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>

                 </tr>
                })
            }
            </> : <React.Fragment></React.Fragment>
        }
                
            </tbody>
        </table>
        
    </div>
  )
}

export default Users
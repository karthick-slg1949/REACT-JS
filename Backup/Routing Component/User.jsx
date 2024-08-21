import React, { Component } from 'react'
import Axios from 'axios';

export class UserClass extends Component {
    state={users:[]}
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
             .then((resp)=>{
                 console.log(resp);
                 console.log(resp.data);
                 this.setState({users:resp.data})
                
           })
             .catch((err)=>{
                 console.log(err.msg);  
             })

            }
        
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h2>UserClass</h2>
        <pre>{JSON.stringify(this.state.users)}</pre>
        <button onClick={this.getUsers} className='btn btn-success'>Get User</button><hr />
        <table className='table'>
            <thead className='bg-dark text-white'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.users.length > 0 ? <>
                    {
                        this.state.users.map((user)=>{
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        })
                    }
                    </>: <React.Fragment></React.Fragment>
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default UserClass
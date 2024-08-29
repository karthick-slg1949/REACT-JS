import React from 'react'

const Employee = () => {
    let employee=[{"id":1,"Name":"Trever","email":"tmacgeffen0@usatoday.com"},
        {"id":2,"Name":"Ragnar","email":"roles1@squarespace.com"},
        {"id":3,"Name":"Mack","email":"mbermingham2@privacy.gov.au"},
        {"id":4,"Name":"Elton","email":"ephillimore3@xrea.com"},
        {"id":5,"Name":"Verge","email":"vvanderlinde4@dot.gov"},
        {"id":6,"Name":"Had","email":"hhayesman5@wikispaces.com"},
        {"id":7,"Name":"Erek","email":"estitwell6@soup.io"},
        {"id":8,"Name":"Bryce","email":"babdon7@goo.ne.jp"},
        {"id":9,"Name":"Anson","email":"adallender8@cafepress.com"},
        {"id":10,"Name":"Ciro","email":"cdonohoe9@paginegialle.it"}]
  return (
    <div><h2>Employee Data</h2>
    <table border={2} >
        
        <thead>
            <tr> 
                <th className='text-success'>Id</th>
            <th className='text-success'>Name</th>
            <th className='text-success'>Email</th>
            </tr>
           
        </thead>
        <tbody>
            {
                employee.map((emp)=>{
                    return <tr key={emp.id}>
                        <td className='text-primary'>{emp.id}</td>
                        <td className='text-primary'>{emp.Name}</td>
                        <td className='text-primary'>{emp.email}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </div>
  )
}

export default Employee
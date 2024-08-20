import CompB from './CompB'

import React, { Component } from 'react'

export class CompA extends Component {
    emp={
        eid:101,
        ename:"karthi"
    }
  render() {
    return (
      <div>
        <h3>CompA</h3><hr />
        <CompB emp_data={this.emp}/>
        Emp_Id={this.emp.eid}<br/>
        Emp_Name={this.emp.ename}
      </div>
    )
  }
}

export default CompA
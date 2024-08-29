import React, { Component } from 'react'
import CompC from './CompC'

export class CompB extends Component {
  render() {
    return (
      <div>
        <h3>CompB</h3>
        {/* <pre>{JSON.stringify(this.props)}</pre><hr /> */}
        <CompC emp_data={this.props}/>
      </div>
    )
  }
}

export default CompB
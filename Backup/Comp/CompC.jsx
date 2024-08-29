import React from 'react'
import CompD from './CompD'

function CompC(props) {
  return (
    <div>
        <h3>CompC</h3>
        {/* <pre>{JSON.stringify(props)}</pre> */}
        <CompD emp_data={props.emp_data}/>
    </div>
  )
}

export default CompC


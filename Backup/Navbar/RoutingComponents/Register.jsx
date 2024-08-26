import React, { Fragment, useState } from 'react'

const Register = () => {
    let [emp,setEmp]=useState({name:"",mobileno:"",dob:"",checked:false})

    let updateHandler=(event)=>{
        setEmp({...emp,[event.target.name]:event.target.value})
    }
    let checkboxHandler=(event)=>{
        setEmp({...emp,checked:event.target.checked})

    }
  return (
    <Fragment>
        <div className='container-mt-3'>
            <pre>{JSON.stringify(emp)}</pre>
       <div className='row'>
        <div className='col-md-4'>
            <div className='card'>
                <div className='card-header bg-primary text-white'>
                <h4>Register Page</h4>
                </div>
                <div className='card-body'>
        <form>
            <div className='form-group'>
                <input type="text" name="name" id="" onChange={updateHandler} className='form-control' placeholder='User Name'/>
            </div>

            <div className='form-group'>
                <input type="text" name="mobileno" id="" onChange={updateHandler} className='form-control' placeholder='Mobile Number'/>
            </div>

            <div className='form-group'>
                <input type="text" name="dob" id="" onChange={updateHandler} className='form-control' placeholder='DOB '/>
            </div>

            <div class="form-group form-check">
                 <input type="checkbox" class="form-check-input" name="checked" onInput={checkboxHandler} />
                 <label class="form-check-label" for="exampleCheck1">Please Accept T&C</label>
             </div>
             
                <input type="submit" value={"Registration"} className='btn btn-warning' />

        </form>
        </div>
        </div>
        </div>
       </div>
       </div>
    </Fragment>
  )
}

export default Register
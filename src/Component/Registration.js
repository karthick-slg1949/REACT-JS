import React from 'react'

const Registration = () => {
  return (
    <div className='container-mt-3'>
    <pre>{JSON.stringify}</pre>
<div className='row'>
<div className='col-md-4'>
    <div className='card'>
        <div className='card-header bg-primary text-white'>
        <h4>Register Page</h4>
        </div>
        <div className='card-body'>
<form>
    <div className='form-group'>
        <input type="text" name="name" id=""  className='form-control' placeholder='User Name'/>
    </div>

    <div className='form-group'>
        <input type="text" name="mobileno" id=""  className='form-control' placeholder='Mobile Number'/>
    </div>

    <div className='form-group'>
        <input type="text" name="dob" id=""  className='form-control' placeholder='DOB '/>
    </div>

    <div class="form-group form-check">
         <input type="checkbox" class="form-check-input" name="checked"  />
         <label class="form-check-label" for="exampleCheck1">Please Accept T&C</label>
     </div>
     
        <input type="submit" value={"Registration"} className='btn btn-warning' />

</form>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Registration
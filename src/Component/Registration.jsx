import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    let btnRef=useRef();
    let passwordRef=useRef();
    let eyeHandler=(event)=>{
        console.log("test case 123");
        passwordRef.current.type='text'
    }
    let inputHandler=(event)=>{
        console.log(event.target.checked);
        btnRef.current.disabled=!event.target.checked
    }
  return (
    <div className='container-mt-3'>
<div className='row'>
<div className='col-md-4'>
    <div className='card'>
        <div className='card-header bg-primary text-white'>
        <h4>Register Page</h4>
        </div>
        <div className='card-body'>
<form>
    <div className='form-group'>
        <input type="text" className='form-control' placeholder='User Name'/>
    </div>

    <div className='form-group'>
        <input type="text" className='form-control' placeholder='Email Id'/>
    </div>

    <div className='form-group'>
        <input ref={passwordRef} name='password' type="password" className='form-control' placeholder='Password'/>
        <span className='input-group-text'>
            <i className='fa fa-eye' onClick={eyeHandler}></i>
        </span>
    </div>

    <div className='form-group'>
        <input type="text" className='form-control' placeholder='Mobile No' />
    </div>

    <div class="form-check form-check-inline">
         <input type="radio" class="form-check-input" name="Gender value"  />Male
     </div>
     <div class="form-check form-check-inline">
         <input type="radio" class="form-check-input" name="Gender value"  />Female
     </div>
     
     <div>
        <textarea name="" id="" className='form-control' rows={3} placeholder='Address'></textarea>
     </div>

     <div className='form-check'>
        <input type="checkbox" onChange={inputHandler} className='form-check-input' />Please Accept <Link to={'/index'}>Terms & Condition</Link>
     </div>

        <input ref={btnRef} type="submit" value={"Registration"} className='btn btn-success' disabled />

</form>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Registration
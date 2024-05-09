
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [username,setuserName] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate();

 
  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login",{username,password})
    .then(result => {console.log(result);
      
        navigate('/dashboard', { username: result.data.username });
    })
    .catch(err => console.log(err))
  }


  return (
   
      <div className='d-flex bg-primary justify-content-center align-items-center' style={{ height: '100vh', width: '100vw' }}>
        <div className='w-250 bg-white rounded p-3'>
          <form onSubmit={Submit}>
          <h2>login</h2>
            <div className='mb-2'>
            <label>username</label>
            <input type='text' placeholder='Enter your name' className='form-control' onChange={(e) => setuserName(e.target.value)}/>
            </div>
            <div  className='mb-2'>
            <label>password</label>
            <input type='text' placeholder='Enter your email'  className='form-control' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
            <button className='btn btn-success'>login</button>
            </div>
          </form>
        </div>
      </div>
 
  )
}

export default Login;

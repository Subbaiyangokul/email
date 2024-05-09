import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


function User ()   {
    const [users ,setUsers]= useState([])

    useEffect( () => {
      axios.get("http://localhost:3001")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
    },[])

    const handleDelete =(id) => {
      axios.delete("http://localhost:3001/deleteUser/"+id)
      .then(result => {console.log(result)
        window.location.reload()
      })
      .catch(err => console.log(err))
    }

  return (
      <div className='d-flex bg-primary justify-content-center align-item-center' style={{ height: '100vh', width: '100vw' }} > 
      {/* display flex height 100 bg primary mean bootstrap blue color justify content align item center  */} 
      <div className='w-50 bg-white p-4'>
      <h1 className=' d-flex justify-content-center align-item-center'>Employees List</h1>
        <Link to='/create' className='btn btn-success'>add+</Link>
        <table className='table'>
          <thead>
            <tr>
            <th>Name</th>
            <th>EmailId</th>
            <th>Mobilenumber</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>course</th>
            <th>image</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                  <Link to={`/update/${user._id}`} className='btn btn-success'>update</Link>
                  <button onClick={(e) => handleDelete(user._id)}  className='btn btn-danger'>delete</button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>

      </div>
  )
}

export default User;


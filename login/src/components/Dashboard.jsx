import React from 'react';
import { useLocation,  useNavigate } from 'react-router-dom';
import Navbar from "./navbar"
import { useState, useEffect } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log('Location state:', location.state);

  const [username, setUsername] = useState('');

  useEffect(() => {
  
    axios.get('"http://localhost:3001/api/username') 
      .then(response => {
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error('Error fetching username:', error);
      });
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
      <div >
      <Navbar username={username} onLogout={handleLogout} />
      <div className='d-flex bg-white justify-content-center align-items-center' style={{ height: '100vh', width: '100vw' }}>
        <h2 >Welcome to Dashboard, {username}!</h2>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = ({ username, onLogout }) => {
    

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span className="nav-link" >Welcome, {username}</span>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link btn" onClick={onLogout}>Logout</button>
            </li>
            <li className="nav-item">
            <button><Link to="/employeelist">employeelist</Link></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

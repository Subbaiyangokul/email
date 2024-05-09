import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [courses, setCourses] = useState([]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCourses([...courses, value]);
    } else {
      setCourses(courses.filter((course) => course !== value));
    }
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/employees", {
        name,
        email,
        mobilenumber,
        designation,
        gender,
        courses,
        image,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center" style={{ height: '100vh', width: '100vw' }}>
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Add Users</h2>
            <div className="mb-2">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-2">
              <label>Email</label>
              <input type="text" placeholder="Enter your email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-2">
              <label>Mobile number</label>
              <input type="text" placeholder="Enter your mobile number" className="form-control" onChange={(e) => setMobilenumber(e.target.value)} />
            </div>
            <div className="mb-2">
              <label>Designation</label>
              <select className="form-control" value={designation} onChange={handleDesignationChange}>
                <option value="">Select Designation</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div className="mb-2">
              <label>Gender</label><br />
              <input type="radio" id="male" name="gender" value="male" onChange={handleGenderChange} />
              <label htmlFor="male">Male</label><br />
              <input type="radio" id="female" name="gender" value="female" onChange={handleGenderChange} />
              <label htmlFor="female">Female</label><br />
            </div>
            <div className="mb-2">
              <label>Course Selection</label><br />
              <input type="checkbox" id="BSc" name="course" value="BSc" onChange={handleCheckboxChange} />
              <label htmlFor="BSc">BSc</label><br />
              <input type="checkbox" id="BCA" name="course" value="BCA" onChange={handleCheckboxChange} />
              <label htmlFor="BCA">BCA</label><br />
              <input type="checkbox" id="MCA" name="course" value="MCA" onChange={handleCheckboxChange} />
              <label htmlFor="MCA">MCA</label><br />
            </div>
            <div className="mb-2">
              <label>Upload Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <div>
              <button className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;

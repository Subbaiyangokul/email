
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Sign';
import Dashboard from './components/Dashboard';
import User from './components/Employeelist';
import CreateUser from './components/CreateUser';
import UpdateUsers from './components/UpdateUsers';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/employeelist' element={<User/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update' element={<UpdateUsers/>}></Route>
      </Routes>
      </BrowserRouter>

  );
};

export default App;

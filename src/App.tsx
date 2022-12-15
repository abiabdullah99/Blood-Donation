import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Donars from './Pages/Donars/Donars';
import Home from './Pages/Home/Home';
import Login from './Pages/Shared/Accounts/Login';
import Registation from './Pages/Shared/Accounts/Registation';
import Navbar from './Pages/Shared/Navbar/Navbar';
import './Style/Style.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/donars' element={<Donars />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/Register' element={<Registation />}></Route>
      </Routes>
    </div>
  );
};

export default App;
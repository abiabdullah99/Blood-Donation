import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Donars from './Pages/Donars/Donars';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import './Style/Style.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/donars' element={<Donars />}></Route>
      </Routes>
    </div>
  );
};

export default App;
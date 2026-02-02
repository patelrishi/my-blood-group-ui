import React from 'react'
import { Routes,Route } from 'react-router-dom';
import { Register } from '../Register/Register';
import { NavBar } from '../NavBar/NavBar';
import { GetDonors } from '../GetDonars/GetDonors';
import {Home} from '../Home/Home';
import { Login } from '../Login/Login';

export const Menu = () => {
 
  return (
    <div>
      <NavBar /><br/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/GetDonors' element={<GetDonors />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  )
}

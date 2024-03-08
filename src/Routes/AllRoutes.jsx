import React from 'react'
import { Routes, Route } from 'react-router-dom'
import User from '../components/UserData/User';
import Signup from '../components/Signup/Signup';
import Login from '../components/Login/Login';

function AllRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/user" element={<User />} />
      <Route path="/sign" element={<Signup />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes
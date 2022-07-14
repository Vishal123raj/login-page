import React from 'react';
import { useState } from 'react';

import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'


import Login from './components/Forms/Login.jsx';
import Home from './components/Home/Home.js';
import Register from './components/Register/Register.js';

// import './App.css';



const App = () => {

   const [user, setLoginUser] = useState({})
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={ user && user._id ? <Home /> : <Login  setLoginUser={setLoginUser}/>
} />

       
          <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App




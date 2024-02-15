import React from 'react'
import LoginPage from '../LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../Register';

function RouterLink() {
  return (
   
  <Router>
    <div>
     
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>

    </div>
  </Router>
  )
}

export default RouterLink
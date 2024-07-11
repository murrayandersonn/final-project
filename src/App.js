import Nring from './components/Nring';
import Homepage from './components/Homepage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LagunaSeca from './components/LagunaSeca';

function App() {

  return (
   <div id='routes-bar text-white' style={{backgroundColor: "#36454F"}}>
    <div>
      <Link to="/" >Home</Link>
    </div>
    <div>
      <Link to="/nring">Nürburgring</Link>
    </div>
    <div>
      <Link to="/lagunaseca">Laguna Seca</Link>
    </div>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/nring' element={<Nring />} />
      <Route path='/lagunaseca' element={<LagunaSeca />} />
    </Routes>
   </div>
  );
}

export default App;

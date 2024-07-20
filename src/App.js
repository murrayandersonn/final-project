import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Homepage from "./components/Homepage";
import Nring from "./components/Nring";
import LagunaSeca from "./components/LagunaSeca";
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/Nring" element={<Nring />}/>
          <Route path="/LagunaSeca" element={<LagunaSeca />}/>
        </Routes>
      </div>
  
  );
}

export default App;

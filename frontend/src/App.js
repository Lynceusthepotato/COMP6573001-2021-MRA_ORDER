import './App.css';
import Header from './components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './pages/Frontpage'
import Loginform from './pages/Loginform';
import Registerform from './pages/Registerform';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [username, setUsername] = useState('');
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Frontpage username={username} />} />
        <Route path="/Login" element={<Loginform setUser={setUsername} />} />
        <Route path="/Register" element={<Registerform />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

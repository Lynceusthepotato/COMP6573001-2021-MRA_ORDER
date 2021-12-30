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

  useEffect(() => {
    (
        async () => {
            await axios.get('http://localhost:8088/api/user', {
                withCredentials: true
            }).then(res => {
              setUsername(res.data.name);
            }).catch(error => {
                if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log(error, error.response);
                }
            })
        }
    )();
  }, []);

  return (
    <div>
      <Navbar name={username} setUser={setUsername}/>
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

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
import Gallerypage from './pages/Gallerypage';


function App() {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    (
        async () => {
            await axios.get('http://localhost:8088/api/user', {
                withCredentials: true
            }).then(res => {
              setUserId(res.data.id);
              setUsername(res.data.name);
              // console.log(res.data);
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
  }, [username]);

  return (
    <div>
      <Navbar name={username} setUser={setUsername}/>
      <Routes>
        <Route path="/" exact element={<Frontpage username={username} usid={userId} />} />
        <Route path="/Login" element={<Loginform setUser={setUsername} />} />
        <Route path="/Register" element={<Registerform />} /> 
        <Route path="/Gallery" element={<Gallerypage usid={userId}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
const Navbar = (  {name, setUser} ) => {
    let menu;

    // useEffect(() => {
    //     console.log(name);
    // }, []); 

    const logout =  async () => {
        await fetch('http://localhost:8088/api/logout', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        })
        setUser();
        window.location.reload();
      }
    
    if (name !== '') {
        menu = (
            <>
                <Link to="/" className="HomeNav" onClick={logout}> Logout </Link>
                {/* <button onClick={logout}> Click me to edit </button> */}
            </>
        )
    } else {
        menu = (
            <>
                <Link to="/Login" className="LoginNav"> Login </Link>
            </>
        )   
    }

    return (
        <div>
            <nav className='navbar'>
                <Link to="/" className="HomeNav"> Welcome </Link>
                {menu}
            </nav>
        </div>
    )
}

export default Navbar

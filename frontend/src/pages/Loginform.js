import { useState, useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'
import axios from 'axios';
import Header from '../components/Header'

const Loginform = ( {setUser} ) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    
    const onSubmit = async (e) => {

        e.preventDefault()

        await axios.post("http://localhost:8088/api/login",
            {
            email: email,
            password: password
            },
            { withCredentials: true }
        ).then(res => {
            setUser(res.data.name)
        }).catch(error => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (error.response.status === 401) {
                alert(error.response.data.message);
            }
        })
        setIsLogin(isLogin => !isLogin)
    }

    if (isLogin) {
        return <Navigate to= "/" />
    }

    return (
        <div className="form-box">
            <Header title=" Login"/>
            <form id= "LoginForm" onSubmit={onSubmit}>
                <input type="text" className="input-field" placeholder= "email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="input-field" placeholder= "Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className="submit-btn" id="login" value= "Login"/>  
            </form>
            <p className ="below"> Don't have an account yet? <Link className='regisLogin' to="/register"> Register </Link></p>   
        </div>
    )
}

export default Loginform

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
            if (res.data.status === 'fail'){
                alert("Your email and password is wrong :v")
            } else {
                setUser(res.data.name)
                setIsLogin(isLogin => !isLogin)
            }
        }).catch(error => {
            console.log(error, error.res)
        })
          
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
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header'

const Frontpage = ( username ) => { 
    const [userProfile, setUserProfile] = useState('');

    const getPhoto = () => {
        axios.get('https://khfiug80gh.execute-api.ap-southeast-1.amazonaws.com/v1/s3?key=newtestonlyjpg/car.jpg'
            ).then(res => {
                // console.log(res.data);
                setUserProfile(res.data);
            })
    }

    useEffect( () => {
        getPhoto();
    }, []);
    
    return (
        <div className="Whole"> 
            <div className="Frontpage">
                <div className="Left">
                    <img src={"data:image/png;base64,"+userProfile} className="Avatar"/>
                </div>
                <div className="Right">
                    <div className="Top">
                        <Header title={"Hello! I'm " + username.username + "!"}/>
                    </div>
                    <div className="Bottom">
                        <p> Description (Will be from the database) </p>
                    </div>
                </div>
                <br className='Bruh'/>
            </div>
        </div>
    )
}

export default Frontpage

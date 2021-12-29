import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header'

const Frontpage = ( {username} ) => { 
    const [userProfile, setUserProfile] = useState('');
    
    return (
        <div className="Whole"> 
            <div className="Frontpage">
                <div className="Left">
                    <img src={require('./../logo512.png')} className="Avatar"/>
                </div>
                <div className="Right">
                    <div className="Top">
                        <Header title={"Hello!" + username}/>
                    </div>
                    <div className="Bottom">
                        <p> Description (Will be from the database) </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontpage

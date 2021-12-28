import { useState, useEffect } from 'react';
import Header from '../components/Header'

const frontpage = ( {username} ) => {    
    return (
        <div className="Frontpage">
            <div className="Left">

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
    )
}

export default frontpage

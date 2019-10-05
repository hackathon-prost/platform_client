import React from 'react'
import { Link } from 'react-router-dom';

import './index.css'

const ProfileComponent = () => {
    return(
        <div className="profile-box">
            <h2>
                Tu perfil
            </h2>
            <div className="profile-picture"></div>
                <div className="profile-data">
                    <p>John Doe</p>
                    <p>                        32 Años (01/01/1992)</p>
                    <p className="bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
    )
}

export default ProfileComponent;
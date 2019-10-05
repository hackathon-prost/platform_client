import React from 'react';
import {Link} from 'react-router-dom'

import './style.css'
const ButtonDashboard = ({title,to}) => {
    return(
        <Link to={to}className='ButtonDashboard'>{title}</Link>
    )
}

export default ButtonDashboard
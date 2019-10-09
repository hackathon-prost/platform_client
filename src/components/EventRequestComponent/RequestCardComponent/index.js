import React from 'react'

//assets
import wrong from '../../../assets/wrong.svg';
import success from '../../../assets/success.svg';

import './style.css'
const RequestCardComponent = ({thumb, name}) =>{
    return(
        <div className='RequestCardComponent'>
            <img src={thumb} alt="#"/>
            <h4>{name}</h4>
            <button>
                <img src={success} alt="Succeeded"/>
            </button>
            <button>
                <img src={wrong} alt="Failed"/>
            </button>
        </div>
    )
}

export default RequestCardComponent

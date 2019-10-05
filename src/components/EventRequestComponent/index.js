import React from 'react';
//comps
import RequestCardComponent from './RequestCardComponent'
import './style.css'

import thumb from '../../assets/thumb.png'

const EventRequestComponent = () => {
    const data=[
        {
            name: 'Lorem Ipsum',
            thumb
        },
        {
            name: 'Lorem Ipsum',
            thumb
        },
        {
            name: 'Lorem Ipsum',
            thumb
        }
    ]
    return(
        <div className='EventRequestComponent'>
            <h3>   
                Lorem ipsum
            </h3>
            <div>
                {
                    data.map(req=>(
                        <RequestCardComponent
                         thumb={req.thumb}
                         name={req.name}
                         />
                    ))
                }
            </div>
        </div>
    )
}

export default EventRequestComponent
import React from 'react';


import ButtonDashboard from '../../components/ButtonDashboard'
import './style.css'
const EventComponent = () =>{
    return(
        <div className='EventComponent'>
           <div>
                <h3>Lorem ipsum</h3>
           </div>
           <div className='EventDate'>
               <h4>18/10</h4>
               <h5>18:00</h5>
           </div>
           <div>
               <p>
               Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur porttitor 
                euismod nibh eget pulvinar. Cras tempor
                 rutrum lectus a imperdiet. Donec at nulla
                  volutpat, fringilla mi vitae, ultrices 
                  felis. 
               </p>
           </div>
           <div className='buttonContain'>
               <ButtonDashboard title='Editar'/>
           </div>
        </div>
    )
}

export default EventComponent
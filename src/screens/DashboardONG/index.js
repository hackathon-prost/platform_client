import React from 'react';

//comps
import EventComponent from '../../components/EventComponent'

import './style.css'
const DashboardONG = ()=>{
    return(
        <main className='DashboardONGView'>
            <div className='PostulacionesCard'>
                <h2>Postulaciones</h2>
            </div>
            <div className='EventsCreatedCard'>
                <div className='titleEventsCard'>
                    <h2>Eventos creados</h2>
                </div>
                <div>
                    <EventComponent/>
                </div>
                <div>
                    <EventComponent/>
                </div>
                <div>
                    <EventComponent/>
                </div>
            </div>
            <div className='UserCard'>
                
            </div>
        </main>
    )    
}
export default DashboardONG
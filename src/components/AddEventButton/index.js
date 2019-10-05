import React from 'react';
import plus from '../../assets/plus.png'


import './style.css'

const AddEventButton = () =>{
    return(
        <button className='AddEventButtonComp'>
            <img src={plus}/> Crear Evento
        </button>
    )
}

export default AddEventButton
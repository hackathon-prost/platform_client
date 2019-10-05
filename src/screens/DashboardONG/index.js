import React from 'react';
import {uri} from '../../constants/uri'
//comps
import EventComponent from '../../components/EventComponent'
import SearchComponent from '../../components/SearchComponent'
import EventRequestComponent from '../../components/EventRequestComponent'
import './style.css'

class DashboardONG extends React.Component{

    constructor(){
        super();
        this.state = {
            ONGData: {}
        }
    }
    componentDidMount(){
        const ONGDataUri = `${uri}prost/api/organizations` 
        fetch(ONGDataUri)
            .then(res => res.json())
            .then(res => this.setState({
                ONGData: res[0]
            }))
        

    }

    render(){
        const {ONGData} = this.state;
    return(
        <main className='DashboardONGView'>
            <div className='SearchContain'>
                <SearchComponent placeholder='Buscar voluntarios'/>
            </div>
            <div className='PostulacionesCard'>
                <h2>Postulaciones</h2>
                <EventRequestComponent/>
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
                <div style={{backgroundImage:`url(${ONGData.profileImage})`}}></div>
                <h2>{ONGData.name}</h2>
                <p>{ONGData.description}</p>
            </div>
        </main>
    ) 
    }
}
export default DashboardONG
import React from 'react'
import { Link } from 'react-router-dom';
import PublicationItem  from '../../components/PublicationItem'
import ProfileBoxComponent from '../../components/ProfileBoxComponent'
import ApplicationItem from '../../components/ApplicationItem'
import SearchComponent from '../../components/SearchComponent'

import './index.css';
 
const VolunteersPage = () => {
    return(
        <div className="volunteers-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12">VAO</div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="applications" >          
                                    <div><h6>Postulaciones</h6>
                                        </div>
                                    <ApplicationItem />
                                    <ApplicationItem />
                                    <ApplicationItem />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-12">
                                <div className="title">
                                    <h4>Próximos eventos</h4> 
                                </div>
                                <div className="search">
                                    <SearchComponent placeholder='Buscar Eventos'/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <PublicationItem />
                                <PublicationItem />
                                <PublicationItem />
                            </div>
                        </div>
                    </div>
                     <div className="col-2">
                        <ProfileBoxComponent />
                    </div>             
                </div>
            </div>
        </div>
    )
}

export default VolunteersPage;

import React from 'react'
import { Link } from 'react-router-dom';
import PublicationItem  from '../../components/PublicationItem'
import ProfileBoxComponent from '../../components/ProfileComponent'
import ApplicationItem from '../../components/ApplicationItem'

const VolunteersPage = () => {
    return(
        <div className="volunteers-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12">Titulo Lorem Ipsum</div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="applications" >          
                                    <h6>Postulaciones</h6>
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
                                <input type="text" className="form-control search" placeholder="Busqueda" />
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

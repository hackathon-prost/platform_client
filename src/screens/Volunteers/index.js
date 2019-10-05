import React from 'react'
import { Link } from 'react-router-dom';
import PublicationItem  from '../PublicationItem'

const VolunteersPage = () => {
    return(
        <div className="volunteers-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <div className="row">
                            <div className="col-12">Titulo Lorem Ipsum</div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card applications" >
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h6>Mis Postulaciones</h6>
                                        </div>
                                        <div className="card application">
                                            <div className="application-image">
                                                <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/83126/preview.svg" className="publication-image-logo" width="25" />
                                            </div>
                                            <div className="application-text">
                                                Marcha por el cambio climatico
                                            </div>
                                            <div className="application-button">
                                                <button className="btn btn-sm btn-warning">X</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="profile-box">
                            <h6>
                                Tu perfil
                            </h6>
                            <img src="http://www.theedwardhotel.co.uk/wp-content/uploads/2017/05/image-lorem-ipsum.png" width="100" className="profile-picture" />
                            <div class="profile-data">
                                <label>Nombre</label>
                                John Doe
                                <label>
                                    Edad
                                </label>
                                32
                                <label>
                                    Fecha Nacimiento
                                </label>
                                01/01/1001
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolunteersPage;
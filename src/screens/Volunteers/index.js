import React from 'react'
import { Link } from 'react-router-dom';

const VolunteersPage = () => {
    return(
        <div className="volunteers-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        Titulo Lorem Ipsum
                    </div>
                    <div className="col-8">
                        <div className="title">
                            <h4>Próximos eventos</h4> 
                        </div>
                        <input type="text" className="form-control search" placeholder="Busqueda" />
                    </div>
                    <div className="col-2">
                        <div className="profile-box">
                            <h2>
                                Tu perfil
                            </h2>
<div className="profile-picture"></div>
                            <div className="profile-data">
                                <p>John Doe</p>
        <p>                        32 Años (01/01/1992)</p>
<p nameClass="bio">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolunteersPage;

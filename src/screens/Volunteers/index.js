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
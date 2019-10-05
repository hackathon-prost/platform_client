import React from 'react'
import { Link } from 'react-router-dom';

const PublicationItem = () => {
    return(
        <div className="card publication">
            <div className="card-image">
                <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/83126/preview.svg" className="publication-image-logo" width="50" />
            </div>
            <div className="card-body">
                <h5 className="card-title">Marcha por el cambio climatico</h5>
                <h6 className="card-subtitle mb-2 text-muted">ONU Foundation</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary btn-orange">Participar</a>
            </div>
            <div className="card-date">
                12/12/2019 18.00hs
            </div>
        </div>
    )
}

export default PublicationItem;
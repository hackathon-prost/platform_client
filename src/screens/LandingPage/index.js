import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return(
        <div className="home-page">
            <div className="boxes left">
            <Link className="btn btn-light btn-lg" to="/volunteers">
                Quiero ser voluntario
            </Link>
            </div>
            <div className="boxes right">
            <Link className="btn btn-primary btn-orange btn-lg" to="/ong">
                Soy una ONG
            </Link>
            </div>
        </div>
    )
}

export default LandingPage;
import React from 'react'
import { Link } from 'react-router-dom';

import './index.css'
const ApplicationItem = () => {
    return(
        <div className="card application">
                    <div className="application-image">
                        <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/83126/preview.svg" className="publication-image-logo" width="25" alt="World/Earth/Globe Icon" />
                    </div>
                    <div className="application-text">
                        Marcha por el cambio climatico
                        <span class="application-text-ong">
                            ONU Foundation
                        </span>
                    </div>
                    <div className="application-button">
                        <img width="25" src="https://www.iconsdb.com/icons/preview/green/ok-xxl.png" alt="OK Icon"/>
                    </div>
                </div>
            
    )
}

export default ApplicationItem;

import React from 'react'
import { Link } from 'react-router-dom';

import './index.css'
const ApplicationItem = () => {
    return(
        <div className="card application">
                    <div className="application-image">
                        <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/83126/preview.svg" className="publication-image-logo" width="25" />
                    </div>
                    <div className="application-text">
                        Marcha por el cambio climatico
                    </div>
                    <div className="application-button">
                        <img width="25" src="https://www.iconsdb.com/icons/preview/green/ok-xxl.png" />
                    </div>
                </div>
            
    )
}

export default ApplicationItem;
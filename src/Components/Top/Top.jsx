import React from "react";
import c from '../../assets/styles/header.module.css'

const Top = () => {
    const logo = '/pizza_logo.jpg'

    return <div className={c.topbar}>
        <img src={logo} alt={''}/>
    </div>
}

export default Top
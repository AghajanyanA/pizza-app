import React from "react";
import {NavLink} from "react-router-dom";
import c from '../../assets/styles/navbar.module.css'

const NavBar = (props) => {

    return (
        <div>
            <div className={c.navList}>
                <NavLink to='/' > <div> Menu </div> </NavLink>
                <NavLink to='/restaurants' > <div> Restaurants </div> </NavLink >
                <NavLink to='/orders' > <div> Orders </div> </NavLink>
                <NavLink to='/contact' > <div> Contact us </div> </NavLink>
            </div>
        </div>
    )
}

export default NavBar
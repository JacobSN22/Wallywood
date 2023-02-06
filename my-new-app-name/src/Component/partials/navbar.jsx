import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return(
        <nav>
            	<li><NavLink to="/">HOME</NavLink></li>
				<li><NavLink to="/posters">PLAKATER</NavLink></li>
				<li><NavLink to="/om_os">OM OS</NavLink></li>
				<li><NavLink to="/kontakt">KONTAKT</NavLink></li>
				<li><NavLink to="/login">LOGIN</NavLink></li>
        </nav>
    )
}

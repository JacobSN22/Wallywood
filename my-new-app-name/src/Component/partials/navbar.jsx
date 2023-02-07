import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "./navbar.style";

export const NavBar = () => {
    return(
		<Navbar>
        	<nav>
            	<li><NavLink to="/">HOME</NavLink></li>
				<li><NavLink to="/plakater">PLAKATER</NavLink></li>
				<li><NavLink to="/om_os">OM OS</NavLink></li>
				<li><NavLink to="/kontakt">KONTAKT</NavLink></li>
				<li><NavLink to="/login">LOGIN</NavLink></li>
        	</nav>
		</Navbar>
    )
}

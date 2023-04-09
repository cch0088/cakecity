import { NavLink } from "react-router-dom";
import React from "react";

function NavBar() {

return(
    <div className="navigation">
        <NavLink to="/cakecity/order">Order Online</NavLink>
        <NavLink to="/cakecity/menu">Our Menu</NavLink>
        <NavLink to="/cakecity/delivery">Delivery</NavLink>
        <NavLink to="/cakecity/contact">Contact Us</NavLink>
     </div>
    )
}

export default NavBar;
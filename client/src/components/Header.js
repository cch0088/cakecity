import { NavLink } from "react-router-dom";
import React from "react";

function Header() {

return (
    <div id="heading">
        <NavLink to="/cakecity">
            <img src="./logos/cakecitylogo.png" alt="Cake City Logo" />
        </NavLink>
    </div>
    )
}
export default Header;
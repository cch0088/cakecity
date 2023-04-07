import { NavLink } from "react-router-dom";
import React from "react";

function Header() {

return (
    <div className="heading">
        <NavLink to="/">
            <img src="./cakecity/logos/cakecitylogo.png" alt="Cake City Logo" 
            onError={(e) => (e.target.src = "./logos/cakecitylogo.png")}/>
        </NavLink>
    </div>
    )
}
export default Header;
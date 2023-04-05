import { NavLink } from "react-router-dom";
import React from "react";

function Heading() {

return (
    <div className="heading">
        <NavLink to="/">
            <img src="./cakecity/logos/cakecitylogo.png" alt="Cake City Logo" />
        </NavLink>
    </div>
    )
}
export default Heading;
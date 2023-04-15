import { NavLink } from "react-router-dom";
import { React, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';

function Header({setUser}) {

    const user = useContext(UserContext);
    const history = useHistory();

    function handleLogout() {
        setUser(null);

        const API = "/logout";
        const API_OPT = {
          method: 'DELETE'
        };
  
        fetch(API, API_OPT).then(history.push("/cakecity/login"));
    }

return (
    <div>
        <div id="heading">
            <NavLink to="/cakecity">
                <img src="./logos/cakecitylogo.png" alt="Cake City Logo" />
            </NavLink>
        </div>
        {(user) ? <div id="userbar">Logged in as {user.username}&nbsp;<div className="logout" onClick={handleLogout}>↪️</div></div> : null}
    </div>
    )
}
export default Header;
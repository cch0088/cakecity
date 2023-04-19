import { NavLink } from "react-router-dom";
import { React, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';

function Header(props) {

    const user = useContext(UserContext);
    const history = useHistory();

    function handleLogout() {
        props.setUser(null);

        const API = props.API + "/logout";
        const API_OPT = {
          method: 'DELETE'
        };
  
        fetch(API, API_OPT).then(history.push("/cakecity/login"));
    }

return (
    <div id="parent-head">
        {(user) ? <div id="userbar">{user.username}&nbsp;<div className="logout" onClick={handleLogout}>↪️</div></div> : null}
        <div id="heading">
            <NavLink to="/cakecity">
                <img src="./logos/cakecitylogo.png" alt="Cake City Logo" />
            </NavLink>
        </div>
    </div>
    )
}
export default Header;
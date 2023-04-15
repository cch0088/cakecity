import { React, useContext } from "react";
import { UserContext } from '../App'
import Account from "./Account";

function Order(props) {

    const user = useContext(UserContext);

    if (user) {
        return <div id="content"></div>;
    }
    else {
        return <Account type={0} API={props.API} />;
    }
}
export default Order;

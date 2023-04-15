import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from '../App';
import Account from "./Account";

import OrderCard from "./OrderCard";

function Delivery(props) {

    let API = props.API + "/orders";
    const user = useContext(UserContext);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setOrders(data));
    }, [API]);

    if (user) {
        //API = props.API + "/orders/" + user.id; // use for dynamic site
        return(
            <div id="content">
                <h2>Recent Orders</h2>
                {orders.map((order, index) => <OrderCard key={index} {...order} API={props.API} />)}
            </div>)
    }
    else {
        return <Account type={0} API={props.API} />;
    }
    
}
export default Delivery;

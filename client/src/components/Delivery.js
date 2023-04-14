import React from "react";
import { useState, useEffect } from "react";

import OrderCard from "./OrderCard";

function Delivery(props) {

    const API = props.API + "/orders";

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setOrders(data));
    }, [API]);

return(
    <div id="content">
        <h2>Recent Orders</h2>
        {orders.map((order, index) => <OrderCard key={index} {...order} API={props.API} />)}
    </div>
)
}
export default Delivery;

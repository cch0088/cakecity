import React from "react";
import { useState, useEffect } from "react";

import OrderCard from "./OrderCard";
import Registration from "./Registration";
import Login from "./Login";
import Reset from "./Reset";

function Order() {

    const API = "https://my-json-server.typicode.com/cch0088/cakecity/orders";

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setOrders(data));
    }, []);

return(
    <div id="content">
        <h2>Recent Orders</h2>
        {orders.map((order, index) => <OrderCard key={index} {...order} />)}
    </div>
)
}
export default Order;

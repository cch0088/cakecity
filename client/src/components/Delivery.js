import React from "react";
import { useState, useEffect } from "react";

import OrderCard from "./OrderCard";

function Delivery() {

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
export default Delivery;

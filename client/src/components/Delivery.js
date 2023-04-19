import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from '../App';
import OrderCard from "./OrderCard";

function Delivery(props) {

    const user = useContext(UserContext);

    let API = props.API + "/orders";

    if (user && props.staticSite === false) {
        API = props.API + "/orders/" + user.id;
    }

    const [orders, setOrders] = useState({"error": "No orders for this user"});

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setOrders(data));
    }, [API]);

    return(
        <div id="content">
            <h2>Recent Orders</h2>
            {
                (orders['error'])
                ? orders['error']
                : orders.map((order, index) => <OrderCard key={index} {...order} API={props.API} />)
            }
        </div>)
    
    
}
export default Delivery;

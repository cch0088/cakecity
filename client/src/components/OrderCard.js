import React from "react";
import { useState, useEffect } from "react";

function OrderCard(props) {

    const [cake, setCake] = useState([]);
    const API = "https://my-json-server.typicode.com/cch0088/cakecity/cakes/" + props.cake_id;

    function capName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function roundFloat(num) {
        return (Math.round(num * 100) / 100).toFixed(2);        
    }

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setCake(data));
    }, [API]);

return(
    <div className="div-table">
        <div className="div-table-heading">
            <div className="div-table-cell">Order Number</div>
            <div className="div-table-cell">{props.id}</div>
        </div>
        <div className="div-table-heading">
            <div className="div-table-cell">Cake Type</div>
            <div className="div-table-cell">{cake.name}</div>
        </div>
        <div className="div-table-heading">
            <div className="div-table-cell">Ready Date</div>
            <div className="div-table-cell">{props.ready_date}</div>
        </div>
        <div className="div-table-heading">
            <div className="div-table-cell">Order Date</div>
            <div className="div-table-cell">{props.created_at}</div>
        </div>
        <div className="div-table-heading">
            <div className="div-table-cell">Total Price</div>
            <div className="div-table-cell">${roundFloat(props.total_price)}</div>
        </div>
        <div className="div-table-heading">
            <div className="div-table-cell">Delivery Type</div>
            <div className="div-table-cell">{capName(props.delivery)}</div>
        </div>
    </div>
)
}
export default OrderCard;

import React from "react";
import { useState, useEffect } from "react";

function CapName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function RoundFloat(num) {
    return (Math.round(num * 100) / 100).toFixed(2);        
}

function OrderCard(props) {

    const [cake, setCake] = useState([]);
    const API = "https://my-json-server.typicode.com/cch0088/cakecity/cakes/" + props.cake_id;

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setCake(data));
    }, [API]);

    function handleDelete(e) {
        // Get Order ID
        console.log(parseInt(e.target.parentNode.childNodes[0].children[1].textContent));
        e.target.parentNode.remove();
    }

return(
    <div className="div-table">
        <div className="div-table-heading-title">
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
            <div className="div-table-cell">${RoundFloat(props.total_price)}</div>
        </div>
        <div className="div-table-heading">
            <div className="div-table-cell">Delivery Type</div>
            <div className="div-table-cell">{CapName(props.delivery)}</div>
        </div>
        <input className="button" type="button" name="cancel" value="Cancel Order" onClick={handleDelete} />
    </div>
)
}

export { RoundFloat, CapName };
export default OrderCard;

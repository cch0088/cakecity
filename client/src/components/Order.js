import React from "react";
import Registration from "./Registration";
import Login from "./Login";
import Reset from "./Reset";

function Order() {

return(
    <div id="content">
        <h2>Recent Orders</h2>
        <div className="div-table">
            <div className="div-table-heading">
                <div className="div-table-cell">Order Number</div>
                <div className="div-table-cell">001</div>
            </div>
            <div className="div-table-heading">
                <div className="div-table-cell">Cake Type</div>
                <div className="div-table-cell">Medium Chocolate Cake</div>
            </div>
            <div className="div-table-heading">
                <div className="div-table-cell">Ready Date</div>
                <div className="div-table-cell">04/20/2023</div>
            </div>
            <div className="div-table-heading">
                <div className="div-table-cell">Order Date</div>
                <div className="div-table-cell">04/16/2023</div>
            </div>
            <div className="div-table-heading">
                <div className="div-table-cell">Total Price</div>
                <div className="div-table-cell">$42.50</div>
            </div>
            <div className="div-table-heading">
                <div className="div-table-cell">Delivery Type</div>
                <div className="div-table-cell">Pickup</div>
            </div>
        </div>
    </div>
)
}
export default Order;

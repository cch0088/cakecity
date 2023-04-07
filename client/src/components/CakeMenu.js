import React from "react";
import CakeCard from "./CakeCard";
import { useState, useEffect } from "react";

function CakeMenu() {

    const API = "/cakes";

    const [cakes, setCakes] = useState([]);
    const [cakeSize, setCakeSize] = useState(0);
    const [cakeType, setCakeType] = useState(0);

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setCakes(data));
    }, []);

    function toggleFilterMenu(e) {
        const dropbtn = document.querySelector("#" + e.target.id);
        const dropmenu = document.querySelector("#" + e.target.nextSibling.id);
        dropmenu.classList.toggle("visible");
        dropbtn.classList.toggle("dropdown-down");
    }

return(
    <div className="content">
        <div className="filter-nav">
            <div className="dropdown">
                <div className="dropdown-button" id="btnCakeType" onClick={toggleFilterMenu}>All Types</div>
                <div className="dropdown-content" id="listCakeType">
                    <a onClick={(e) => setCakeType(0)} href="#">All</a>
                    <a onClick={(e) => setCakeType(2)} href="#">Vanilla</a>
                    <a onClick={(e) => setCakeType(3)} href="#">Chocolate</a>
                    <a onClick={(e) => setCakeType(1)} href="#">Fruit</a>
                </div>
            </div>
            <div className="dropdown">
                <div className="dropdown-button" id="btnCakeSize" onClick={toggleFilterMenu}>All Sizes</div>
                <div className="dropdown-content" id="listCakeSize">
                    <a onClick={(e) => setCakeSize(0)} href="#">All</a>
                    <a onClick={(e) => setCakeSize(1)} href="#">Personal</a>
                    <a onClick={(e) => setCakeSize(2)} href="#">Small</a>
                    <a onClick={(e) => setCakeSize(3)} href="#">Large</a>
                </div>
            </div>
        </div>
        <div id="cakecard-container">
            {cakes
                .filter(cake => (cakeSize > 0) ? cake.size === cakeSize : cake)
                .filter(cake => (cakeType > 0) ? cake.base_type === cakeType : cake)
                .map((cake, index) => {
                    return <CakeCard key={index} {...cake} />;
                })
            }
        </div>
    </div>
    )
}
export default CakeMenu;

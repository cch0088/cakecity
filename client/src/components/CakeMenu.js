import React from "react";
import CakeCard from "./CakeCard";
import { useState, useEffect } from "react";

function CakeMenu() {

    const API = "/cakes";

    const [cakes, setCakes] = useState([]);

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
                    <a onClick={(e) => console.log(e)} href="#">All</a>
                    <a onClick={(e) => console.log(e)} href="#">Vanilla</a>
                    <a onClick={(e) => console.log(e)} href="#">Chocolate</a>
                    <a onClick={(e) => console.log(e)} href="#">Fruit</a>
                </div>
            </div>
            <div className="dropdown">
                <div className="dropdown-button" id="btnCakeSize" onClick={toggleFilterMenu}>All Sizes</div>
                <div className="dropdown-content" id="listCakeSize">
                    <a onClick={(e) => console.log(e)} href="#">All</a>
                    <a onClick={(e) => console.log(e)} href="#">Personal</a>
                    <a onClick={(e) => console.log(e)} href="#">Small</a>
                    <a onClick={(e) => console.log(e)} href="#">Large</a>
                </div>
            </div>
        </div>
        <div id="cakecard-container">
            {cakes.map((cake, index) => {
                return <CakeCard key={index} {...cake} />;
            })}
        </div>
    </div>
    )
}
export default CakeMenu;

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

    function toggleFilter(e) {
        const selectedItem = document.querySelector("." + e.target.className + ".dropdown-content-select");
        if (selectedItem)
        {
            selectedItem.classList.toggle("dropdown-content-select");
            e.target.classList.toggle("dropdown-content-select");
            e.target.parentElement.previousSibling.textContent = e.target.text + " ⌄";
        }
        switch(e.target.className)
        {
            case "toggleType dropdown-content-select":
                setCakeType(parseInt(e.target.id.substr(1)));
                break;
            case "toggleSize dropdown-content-select":
                setCakeSize(parseInt(e.target.id.substr(1)));
                break;
            default:
                break;
        }
    }

return(
    <div className="content">
        <div className="filter-nav">
            <div className="dropdown">
                <div className="dropdown-button" id="btnCakeSize" onClick={toggleFilterMenu}>All Sizes&nbsp;&nbsp;&#8964;</div>
                <div className="dropdown-content" id="listCakeSize">
                    <a onClick={toggleFilter} id="s0" className="toggleSize dropdown-content-select" href="#">All Sizes&nbsp;</a>
                    <a onClick={toggleFilter} id="s1" className="toggleSize" href="#">Personal&nbsp;&nbsp;</a>
                    <a onClick={toggleFilter} id="s2" className="toggleSize" href="#">Medium&nbsp;&nbsp;</a>
                    <a onClick={toggleFilter} id="s3" className="toggleSize" href="#">Large&nbsp;&nbsp;&nbsp;</a>
                </div>
            </div>
            <div className="dropdown">
                <div className="dropdown-button" id="btnCakeType" onClick={toggleFilterMenu}>All Types&nbsp;&nbsp;&#8964;</div>
                <div className="dropdown-content" id="listCakeType">
                    <a onClick={toggleFilter} id="t0" className="toggleType dropdown-content-select" href="#">All Types&nbsp;</a>
                    <a onClick={toggleFilter} id="t1" className="toggleType" href="#">Fruit&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    <a onClick={toggleFilter} id="t2" className="toggleType" href="#">Vanilla&nbsp;&nbsp;&nbsp;</a>
                    <a onClick={toggleFilter} id="t3" className="toggleType" href="#">Chocolate</a>
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

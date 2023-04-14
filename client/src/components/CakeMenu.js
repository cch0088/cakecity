import React from "react";
import CakeCard from "./CakeCard";
import { useState, useEffect } from "react";

function CakeMenu(props) {

    const API = props.API + "/cakes";

    const [cakes, setCakes] = useState([]);
    const [cakeSize, setCakeSize] = useState(0);
    const [cakeType, setCakeType] = useState(0);

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setCakes(data));
    }, [API]);

    function toggleFilter(e) {
        const selectedItem = document.querySelector("." + e.target.className + ".dropdown-content-select");
        if (selectedItem)
        {
            selectedItem.classList.toggle("dropdown-content-select");
            e.target.classList.toggle("dropdown-content-select");
            e.target.parentElement.previousSibling.textContent = e.target.textContent + " ⌄";
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
    <div id="content">
        <div id="filter-nav">
            <div className="dropdown">
                <div className="dropdown-button" id="btnCakeSize">All Sizes&nbsp;&nbsp;&#8964;</div>
                <div className="dropdown-content" id="listCakeSize">
                    <div onClick={toggleFilter} id="s0" className="toggleSize dropdown-content-select">All Sizes&nbsp;</div>
                    <div onClick={toggleFilter} id="s1" className="toggleSize">Personal&nbsp;&nbsp;</div>
                    <div onClick={toggleFilter} id="s2" className="toggleSize">Medium&nbsp;&nbsp;</div>
                    <div onClick={toggleFilter} id="s3" className="toggleSize">Large&nbsp;&nbsp;&nbsp;</div>
                </div>
            </div>
            <div className="dropdown">
                <div className="dropdown-button" id="btnCakeType">All Types&nbsp;&nbsp;&#8964;</div>
                <div className="dropdown-content" id="listCakeType">
                    <div onClick={toggleFilter} id="t0" className="toggleType dropdown-content-select">All Types&nbsp;</div>
                    <div onClick={toggleFilter} id="t1" className="toggleType">Fruit&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div onClick={toggleFilter} id="t2" className="toggleType">Vanilla&nbsp;&nbsp;&nbsp;</div>
                    <div onClick={toggleFilter} id="t3" className="toggleType">Chocolate</div>
                </div>
            </div>
        </div>
        <div id="cakecard-container">
            {cakes
                .filter(cake => (cakeSize > 0) ? cake.size === cakeSize : cake)
                .filter(cake => (cakeType > 0) ? cake.base_type === cakeType : cake)
                .map((cake, index) => {
                    return <CakeCard key={index} {...cake} setBuildCakeID={props.setBuildCakeID} />;
                })
            }
        </div>
    </div>
    )
}
export default CakeMenu;

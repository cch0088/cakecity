import React from "react";
import CakeCard from "./CakeCard";

function CakeMenu() {

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
            <CakeCard />
            <CakeCard />
            <CakeCard />
            <CakeCard />
        </div>
    </div>
    )
}
export default CakeMenu;

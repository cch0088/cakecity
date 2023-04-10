import React from "react";
import NavBar from "./NavBar";

function Home() {

return(
    <div id="home-content">
        <img src="./cakecity/logos/cakecitylogo.png" alt="Cake City Logo" />
        <div id="home-nav-container">
            <NavBar/>
        </div>
        <div className="home-slide">
            <div>AB</div>
            <div><img src="./cakecity/cakes/thumbs/medium-chocolate-cake.png" alt="Chocolate Cake" /></div>
        </div>
        <div className="home-slide">
            <div><img src="./cakecity/cakes/thumbs/personal-fruit-cake.png" alt="Fruit Cake" /></div>
            <div>AB</div>
        </div>
    </div>
)
}
export default Home;

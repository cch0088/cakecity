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
            <div className="caption">Welcome to Cake City!</div>
            <div className="caption">
                The place for personalized cakes for birthdays or any occassion!
                You can check out our menu or place an order today and choose when you want it delivered.
                Get your special cake today. Cakes are made to order with special options available.
            </div>
            <div><img src="./cakes/thumbs/medium-chocolate-cake.png" alt="Chocolate Cake" /></div>
        </div>
        <div className="home-slide">
            <div><img src="./cakes/thumbs/personal-fruit-cake.png" alt="Fruit Cake" /></div>
            <div>You can have your cake and eat it too!</div>
        </div>
    </div>
)
}
export default Home;

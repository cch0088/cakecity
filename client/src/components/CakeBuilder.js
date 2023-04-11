import React from "react";
import { useState, useEffect } from "react";

function CakeBuilder(props) {

    const [cake, setCake] = useState([]);
    const API = "https://my-json-server.typicode.com/cch0088/cakecity/cakes/" + props.buildCakeID;

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setCake(data));
    }, [API]);

    const image_url = "./cakes/thumbs/" + cake.image;

return (
    <div id="content">
        <div>This section is under construction</div>
        <div className="cakecard-large">
            <div className="cakecard-text">{cake.name}</div>
            <div>
                <img src={image_url} alt={cake.name} 
                onError={(e) => (e.target.src = "./cakes/thumbs/no-cake.png")} />
            </div>
        </div>
        <div className="cakecard-large">
            <div className="cakecard-text">Contents</div>
            <div>
                <ul>
                    {(cake.contents) ? (cake.contents.map((x, i) => <li key={i}>{x}</li>)) : null}
                </ul>
            </div>
        </div>
        <div className="cakecard-large">
            <div className="cakecard-text">Personalize</div>
            <div>
                <ul>
                    <li>Add candles</li>
                    <li>Add text</li>
                </ul>
            </div>
        </div>
        <div className="cakecard-large">
            <div className="cakecard-text">Place Order</div>
        </div>
    </div>
    )
}
export default CakeBuilder;
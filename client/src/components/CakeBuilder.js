import React from "react";
import { useState, useEffect } from "react";

function CakeBuilder(props) {

    const [cake, setCake] = useState([]);
    const API = "https://my-json-server.typicode.com/cch0088/cakecity/cakes/" + props.buildCakeID;

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setCake(data));
    }, []);

    const image_url = "./cakes/thumbs/" + cake.image;

return (
    <div id="content">
        <div className="cakecard" id={cake.id}>
            <div className="cakecard-thumbnail-container">
                <img src={image_url} alt={cake.name} id={cake.id}
                onError={(e) => (e.target.src = "./cakes/thumbs/no-cake.png")} />
            </div>
            <div className="cakecard-text">{cake.name}</div>
        </div>
    </div>
    )
}
export default CakeBuilder;
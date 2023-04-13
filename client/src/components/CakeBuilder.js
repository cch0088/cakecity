import React from "react";
import { useState, useEffect } from "react";
import { CapName, RoundFloat } from "./OrderCard";

function CakeBuilder(props) {

    const [cake, setCake] = useState([]);
    const API = "https://my-json-server.typicode.com/cch0088/cakecity/cakes/" + props.buildCakeID;

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setCake(data));
    }, [API]);

    const image_url = "./cakes/full/" + cake.image;

    function handleSubmit(e)
    {
        
    }

return (
    <div id="content">
        <div id="cakebuilder">
            <div id="builder-frame-large">
                <div className="cakecard-large">
                    <div className="cakecard-text">{cake.name}</div>
                    <div>
                        <img src={image_url} alt={cake.name} 
                        onError={(e) => (e.target.src = "./cakes/full/no-cake.png")} />
                    </div>
                </div>
            </div>
            <div id="builder-frame-small">
                <div className="cake-option">
                    <div className="cakecard-text">Contents</div>
                    <div>
                        <ul>
                            {(cake.contents) ? (cake.contents.map((x, i) => <li key={i}>{CapName(x)}</li>)) : null}
                        </ul>
                    </div>
                </div>
                <div className="cake-option">
                    <div className="cakecard-text">Personalize</div>
                    <div>
                        <ul>
                            <li>Add candles</li>
                            <li>Add text</li>
                        </ul>
                    </div>
                </div>
                <div className="cake-option">
                    <div className="cakecard-text">
                        Order total: ${RoundFloat(cake.base_price)}
                        <input className="button" type="button" name="submit" value="Submit Order" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default CakeBuilder;
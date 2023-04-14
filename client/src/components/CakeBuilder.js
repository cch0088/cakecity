import React from "react";
import { useState, useEffect } from "react";
import { CapName, RoundFloat } from "./OrderCard";

function CakeBuilder(props) {

    const [cake, setCake] = useState([]);
    const API = "https://my-json-server.typicode.com/cch0088/cakecity/cakes/" + props.buildCakeID;

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setCake(data));
    }, [API]);
    
    let total_price = RoundFloat(cake.base_price);

    const image_url = "./cakes/full/" + cake.image;

    function handleWriting(e)
    {

    }

    function handleCandles(e)
    {

    }

    function handleGiftwrap(e)
    {

    }

    function handlePicture(e)
    {

    }

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
                        <div id="1" className="checkbox-text">
                            <input className="checkbox" type="checkbox" id="c1" />
                            Add writing
                        </div>
                        <div id="2" className="checkbox-text">
                            <input className="checkbox" type="checkbox" id="c2" />
                            Add candles
                        </div>
                        <div id="3" className="checkbox-text">
                            <input className="checkbox" type="checkbox" id="c3" />
                            Add gift wrap
                        </div>
                        <div id="4" className="checkbox-text">
                            <input className="checkbox" type="checkbox" id="c4" />
                            Add picture
                        </div>
                    </div>
                </div>
                <div className="cake-option">
                    <div className="cakecard-text">
                        Desired delivery date
                        <input className="button" type="date" name="date" />
                    </div>
                </div>
                <div className="cake-option">
                    <div className="cakecard-text">
                        Order total: ${total_price}
                        <input className="button" type="button" name="submit" value="Submit Order" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default CakeBuilder;
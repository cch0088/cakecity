import React from "react";
import { useState, useEffect } from "react";
import { CapName, RoundFloat } from "./OrderCard";

function CakeBuilder(props) {

    const [cake, setCake] = useState([]);
    const API = "https://my-json-server.typicode.com/cch0088/cakecity/cakes/" + props.buildCakeID;

    const [extraCost, setExtraCost] = useState(0);
    const salesTax = 1.08;

    useEffect(() => {
        fetch(API).then(resp => resp.json()).then(data => setCake(data));
    }, [API]);
    
    const image_url = "./cakes/full/" + cake.image;

    function priceCalc(condition, price)
    {
        if (condition) {setExtraCost(extraCost + price);}
        else {setExtraCost(extraCost - price);}
    }

    function handleWriting(e)
    {
        priceCalc(e.target.checked, 3.28);
    }

    function handleCandles(e)
    {
        priceCalc(e.target.checked, 6.35);
    }

    function handleGiftwrap(e)
    {
        priceCalc(e.target.checked, 4.25);
    }

    function handlePhoto(e)
    {
        priceCalc(e.target.checked, 5.99);
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
                            <input className="checkbox" type="checkbox" id="c1" onChange={handleWriting} />
                            Add Happy Birthday text
                        </div>
                        <div id="2" className="checkbox-text">
                            <input className="checkbox" type="checkbox" id="c2" onChange={handleCandles} />
                            Add age candles
                        </div>
                        <div id="3" className="checkbox-text">
                            <input className="checkbox" type="checkbox" id="c3" onChange={handleGiftwrap}/>
                            Add gift wrap
                        </div>
                        <div id="4" className="checkbox-text">
                            <input className="checkbox" type="checkbox" id="c4" onChange={handlePhoto}/>
                            Add photo
                        </div>
                    </div>
                </div>
                <div className="cake-option">
                    <div className="cakecard-text">
                        Desired ready date
                        <input className="button" type="date" name="date" value={new Date().toISOString().slice(0, 10)} />
                    </div>
                </div>
                <div className="cake-option">
                    <div id="4" className="checkbox-text">
                        <input className="checkbox" type="checkbox" id="c4" />
                        Check here for local pickup
                    </div>
                    <div className="cakecard-text">
                        Order total: ${RoundFloat((extraCost+cake.base_price)*salesTax)}
                        <input className="button" type="button" name="submit" value="Submit Order" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default CakeBuilder;
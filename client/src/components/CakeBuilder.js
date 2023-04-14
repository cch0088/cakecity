import React from "react";
import { useState, useEffect } from "react";
import { CapName, RoundFloat } from "./OrderCard";

function CakeBuilder(props) {

    const [cake, setCake] = useState([]);
    const [readyDate, setReadyDate] = useState(new Date().toISOString().slice(0, 10));
    const API = props.API + "/cakes/" + props.buildCakeID;

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

    let final_price = RoundFloat((extraCost+cake.base_price)*salesTax);

    function handleWriting(e)
    {
        priceCalc(e.target.checked, 3.28);
    }

    function handleCandles(e)
    {
        priceCalc(e.target.checked, 6.35);
        document.getElementById('3').classList.toggle('hidden');
    }

    function handleGiftwrap(e)
    {
        priceCalc(e.target.checked, 4.25);
    }

    function handlePhoto(e)
    {
        priceCalc(e.target.checked, 5.99);
    }

    function handleDateChange(e)
    {
        setReadyDate(e.target.value);
    }

    function handleSubmit(e)
    {
        let cakeOptions = [];
        let deliveryOption = "delivery";
        let age = document.getElementById('age').value;

        if (age === "") {
            age = 0;
        }
        else {
            age = parseInt(age);
        }

        if (document.getElementById('c1').checked) {
            cakeOptions.push('birthday');
        }
        if (document.getElementById('c2').checked) {
            cakeOptions.push('candle');
        }
        if (document.getElementById('c3').checked) {
            cakeOptions.push('wrap');
        }
        if (document.getElementById('c4').checked) {
            cakeOptions.push('photo');
        }
        if (document.getElementById('c5').checked) {
            deliveryOption = "pickup";
        }

        let newOrder = {
            "cake_id": cake.id,
            "user_id": 2,
            "total_price": final_price,
            "ready_date": readyDate,
            "delivery": deliveryOption,
            "options": cakeOptions,
            "bday_age": age
        }

        console.log(newOrder);
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
                        <div id="3" className="checkbox-test hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age&nbsp;
                            <input id="age" type="number" min="1" max="150" className="checkbox" />
                        </div>
                        <div id="4" className="checkbox-text">
                            <input className="checkbox" type="checkbox" id="c3" onChange={handleGiftwrap}/>
                            Add gift wrap
                        </div>
                        <div id="5" className="checkbox-text">
                            <input className="checkbox" type="checkbox" id="c4" onChange={handlePhoto}/>
                            Add photo
                        </div>
                    </div>
                </div>
                <div className="cake-option">
                    <div className="cakecard-text">
                        Desired ready date
                        <input className="button" type="date" name="date" defaultValue={readyDate} onChange={handleDateChange} />
                    </div>
                </div>
                <div className="cake-option">
                    <div id="6" className="checkbox-text">
                        <input className="checkbox" type="checkbox" id="c5" />
                        Check here for local pickup
                    </div>
                    <div className="cakecard-text">
                        Order total: ${final_price}
                        <input className="button" type="button" name="submit" value="Submit Order" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default CakeBuilder;
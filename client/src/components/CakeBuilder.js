import React from "react";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CapName, RoundFloat } from "./OrderCard";
import { UserContext } from '../App';

function CakeBuilder(props) {

    const history = useHistory();
    const [cake, setCake] = useState([]);
    const [readyDate, setReadyDate] = useState(new Date().toISOString().slice(0, 10));
    const API = props.API + "/cakes/" + props.buildCakeID;
    const new_order_api = props.API + "/orders";
    const user = useContext(UserContext);

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
        if (e.target.checked) {
            document.getElementById('age').value = 10;
        }
        else {
            document.getElementById('age').value = 0;
        }
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

        function reformatDate(date)
        {
            const year = date.slice(0, 4);
            const month = date.slice(5, 7);
            const day = date.slice(8, 10);
            return month + '/' + day + '/' + year;
        }

        const newOrder = {
            "cake_id": cake.id,
            "user_id": user.id,
            "total_price": final_price,
            "ready_date": reformatDate(readyDate),
            "delivery": deliveryOption,
            "options": cakeOptions,
            "bday_age": age
        }

        const API_OPT = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        }

        fetch(new_order_api, API_OPT).then(resp => resp.json()).then(history.push("/cakecity/delivery"));
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
                        <div id="3" className="checkbox-test hidden">
                        <div className="age">Age&nbsp;
                            <input id="age" type="number" min="1" max="150" className="checkbox" /></div>
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
                        {(user) 
                        ? <input className="button" type="button" name="submit" value="Submit Order" onClick={handleSubmit} /> 
                        : <input className="button" type="button" name="submit" value="Submit Order" disabled />}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default CakeBuilder;
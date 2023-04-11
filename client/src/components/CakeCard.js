import React from "react";
import { useHistory } from "react-router-dom";

function CakeCard(props) {

const image_url = "./cakes/thumbs/" + props.image;

let history = useHistory();

function selectCake(e) {
    props.setBuildCakeID(e.target.id);
    history.push("/cakecity/cakebuilder");
}

return (
    <div className="cakecard" id={props.id} onClick={selectCake}>
        <div className="cakecard-thumbnail-container">
            <img src={image_url} alt={props.name} id={props.id} 
            onError={(e) => (e.target.src = "./cakes/thumbs/no-cake.png")} />
        </div>
        <div className="cakecard-text">{props.name}</div>
    </div>
    )
}
export default CakeCard;
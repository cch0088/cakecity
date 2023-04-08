import React from "react";

function CakeCard(props) {

const image_url = "./cakes/thumbs/" + props.image;

return (
    <div className="cakecard">
        <div className="cakecard-thumbnail-container">
            <img src={image_url} alt={props.name} 
            onError={(e) => (e.target.src = "./cakes/thumbs/no-cake.png")} />
        </div>
        <div className="cakecard-text">{props.name}</div>
    </div>
    )
}
export default CakeCard;
import React from "react";

function CakeCard(props) {

const image_url = "./cakes/thumbs/" + props.image;

return (
    <div className="cakecard" id={props.id} onClick={(e) => props.setBuildCakeID(e.target.id)}>
        <div className="cakecard-thumbnail-container">
            <img src={image_url} alt={props.name} id={props.id} 
            onError={(e) => (e.target.src = "./cakes/thumbs/no-cake.png")} />
        </div>
        <div className="cakecard-text">{props.name}</div>
    </div>
    )
}
export default CakeCard;
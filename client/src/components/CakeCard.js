import React from "react";

function CakeCard(props) {

return (
    <div className="cakecard">
        <div className="cakecard-thumbnail-container">
            <img src={props.image_url} alt={props.name} />
        </div>
        <div className="cakecard-text">{props.name}</div>
    </div>
    )
}
export default CakeCard;
import React from "react";

function CakeBuilder(props) {

const image_url = "./cakes/thumbs/" + props.image;

console.log(props.buildCakeID);

return (
    <div id="content">
        <div className="cakecard" id={props.id}>
            <div className="cakecard-thumbnail-container">
                <img src={image_url} alt={props.name} id={props.id}
                onError={(e) => (e.target.src = "./cakes/thumbs/no-cake.png")} />
            </div>
            <div className="cakecard-text">{props.name}</div>
        </div>
    </div>
    )
}
export default CakeBuilder;
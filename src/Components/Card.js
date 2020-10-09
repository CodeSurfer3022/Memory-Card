import React from "react";

function Card(props) {
    return(
        <div className="card" onClick={() => props.handleClick(props.pokemon.id)}>
            <div className="image">
                <img src={props.pokemon.image} alt={props.pokemon.name} />
            </div>
            <div className="main">
                <p>{props.pokemon.name}</p>
            </div>
        </div>
    )
}

export default Card;
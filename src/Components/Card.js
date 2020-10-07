import React from "react";

function Card(props) {
    return(
        <div className="card" onClick={() => props.handleClick(props.pokemon.id)}>
            <div className="image">
                <img src="#" alt="poke" />
            </div>
            <div className="main">
                <p>{props.pokemon.name}</p>
            </div>
        </div>
    )
}

export default Card;
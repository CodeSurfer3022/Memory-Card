import React from "react";

function Main(props) {
    return(
        <main>
            This is main
            <div className="wrapper">
                {props.pokemonCards}
            </div>
        </main>
    )
}

export default Main;
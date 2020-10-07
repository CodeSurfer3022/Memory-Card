import React from "react";
import Card from "./Card";
import pokemons from '../pokemons_1.json'

function Main() {
    console.log(typeof pokemons);
    const pokemonCards = pokemons.map( pokemon =>
            <Card key={pokemon.id} pokemon={pokemon} />
        );

    return(
        <main>
            This is main
            <div className="wrapper">
                {pokemonCards}
            </div>
        </main>
    )
}

export default Main;
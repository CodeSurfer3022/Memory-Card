import React, {useState} from 'react';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

import pokemonsArray from './pokemons_1.json'

const handleClick = (id) => {
    console.log(id);

}

function App() {
    const [pokemons, setPokemons] = useState(pokemonsArray);
    const [score, setScore] = useState(0);

    const pokemonCards = pokemons.map( pokemon =>
        <Card
            key={pokemon.id}
            pokemon={pokemon}
            handleClick={handleClick}
        />
    );

    return (
        <div className="App">
            <Header score={score}/>
            <Main pokemonCards={pokemonCards}/>
            <Footer/>
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

import pokemons from './pokemons_1.json'



function App() {
    const [score, setScore] = useState(0);
    const [topScore, setTopscore] = useState(0);

    const handleIncrement = () => {
        setScore(prevScore => prevScore + 1);
    }

    const updateTopscore = () => {
        setTopscore(score > topScore ? score : topScore);
    }

    const handleClick = (id) => {
        pokemons.forEach(pokemon => {
            if(pokemon.id === id) {
                if(pokemon.clicked) {
                    // if the card was already clicked, you lose!
                    // update top score and reset score
                    updateTopscore();
                    setScore(0);

                    // set clicked to false in all cards for new game
                    pokemons.forEach(pokemon => pokemon.clicked = false);
                } else {
                    pokemon.clicked = true;
                    console.log(`score is ${score}`);
                    handleIncrement();
                }
                console.log(pokemon);
            }
        });
    }

    const pokemonCards = pokemons.map( pokemon =>
        <Card
            key={pokemon.id}
            pokemon={pokemon}
            handleClick={handleClick}
        />
    );



    return (
        <div className="App">
            <Header score={score} topScore={topScore}/>
            <Main pokemonCards={pokemonCards}/>
            <Footer/>
        </div>
    );
}

export default App;

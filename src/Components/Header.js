import React from "react";

function Header(props) {
    return(
        <header>
            Pokemon memory game
            <div className="game-info">
                Easy Medium Hard
                <p>
                    Click each card only once, clicking the same card twice will
                    reset score to 0
                </p>
                <p>Score is {props.score}</p>
                <p>Top Score is {props.topScore}</p>
            </div>
        </header>
    )
}

export default Header;
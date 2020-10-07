import React from "react";

function Header() {
    return(
        <header>
            Pokemon memory game
            <div className="game-info">
                Easy Medium Hard
                <p>
                    Click each card only once, clicking the same card twice will
                    reset score to 0
                </p>
            </div>
        </header>
    )
}

export default Header;
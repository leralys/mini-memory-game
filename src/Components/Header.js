import React from 'react';
import './Game.css';

function Header(props) {
    return (
        <header className="Header">
            <section>
                <h1>Superheroes Memory Game</h1>
                <div className="Header-score">
                    <span>Score: {props.score}</span>
                    <span>Top Score: {props.topScore}</span>
                </div>
            </section>
            <div className="Header-strip"></div>
            <section>
                <h3>Get points by clicking on an image but be careful to click more the once!</h3>
            </section>

        </header>
    )
}



export default Header;
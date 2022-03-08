import React, { Component } from 'react';
import db from '../DB/db.json';
import './Game.css';
import Header from './Header';
import Card from './Card';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            topScore: 0,
            clickedArr: []
        };
        this.shuffle = this.shuffle.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    shuffle() {
        return db.superheroes.sort((a, b) => 0.5 - Math.random())
    }
    handleClick(obj) {
        const found = this.state.clickedArr.some(el => el.id === obj.id);
        if (!found) {
            let newArr = [...this.state.clickedArr, obj];
            let newScore = this.state.score + 1;
            this.setState({ clickedArr: newArr, score: newScore });
        } else {
            let newTopScore = this.state.score;
            this.setState({ score: 0, topScore: newTopScore, clickedArr: [] });
        }
    }
    render() {
        return (
            <>
                <Header {...this.state} />
                <div className="Cards-grid">
                    {
                        this.shuffle().map(obj => {
                            return (
                                <Card key={obj.id} {...obj} handleClick={this.handleClick} />
                            )
                        })
                    }
                </div>
            </>

        )
    }
}



export default Game;



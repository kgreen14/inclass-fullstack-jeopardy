import React, { Component } from 'react';
import axios from 'axios';


class Game extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            user: "",
            points: "",
            categories: "",
            board: []
        }
    }

    componentWillMount() {
        const id = this.props.match.params.gameID
        axios.get(`/api/game/${id}`).then((res) => {
          this.setState({
            id: res.data._id,
            user: res.data.user,
            points: res.data.points,
            categories: res.data.categories,
            board: res.data.board
            })
        })
    }

    render() {
        return (
            <div>
                <h1>This Is Jeopardy!</h1>
        <h3>Welcome {this.state.user}</h3>
        <h3>Points: {this.state.points}</h3>
        {/* <GameBoard board={this.state.board} categories={this.state.categories} /> */}
            </div>
        );
    }
}

export default Game;
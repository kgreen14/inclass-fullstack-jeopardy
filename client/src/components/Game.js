import React, { Component } from 'react';

class Game extends Component {

    render() {
        return (
            <div>
                Hello From Game
                {this.props.match.params.gameID}
            </div>
        );
    }
}

export default Game;
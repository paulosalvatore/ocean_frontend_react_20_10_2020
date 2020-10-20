import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
    render() {
        return <div>Board</div>;
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>

                <div className="game-info">
                    Informações do Jogo
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    // Componente -> Elemento a ser renderizado
    <Game/>,
    // Em um elemento -> Container em que será renderizado
    document.getElementById('root')
);

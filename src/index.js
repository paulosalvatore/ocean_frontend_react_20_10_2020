import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    // Estado do meu componente
    // State -> Serve para guardar informações do componente

    constructor(props) {
        super(props);

        this.state = {
            move: "X"
            /*
            "chave": "valor",
            "nome": "Paulo",
            "idade": 10,
            "vivo": true,
            "filmes": ["Senhor dos Anéis", "Harry Potter"],
            "numeros": [1, 2, 3, 4, 5],
            "vivos": [true, false, true, true],
            "documentos": {
                "cpf": "123.542.555-55",
                "rg": "33.333.333-5"
            }
            */
        };
    }

    handleClick() {
        console.log(this);

        this.setState(
            { move: "O" }
        )
    }

    render() {
        return <button className="square" onClick={() => this.handleClick()}>
            {this.state.move}
        </button>;
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>
    }

    render() {
        return <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>;
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

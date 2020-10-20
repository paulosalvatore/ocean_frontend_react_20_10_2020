import React from 'react';
import ReactDOM from 'react-dom';

function Game(props) {
    return <div>Olá, mundo!</div>
}

ReactDOM.render(
    // Componente
    <Game/>,
    // Em um elemento
    document.getElementById('root')
);

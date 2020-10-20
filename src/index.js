import React from 'react';
import ReactDOM from 'react-dom';

function Game(props) {
    return <div>Olá, mundo!</div>;
}

ReactDOM.render(
    // Componente -> Elemento a ser renderizado
    <Game/>,
    // Em um elemento -> Container em que será renderizado
    document.getElementById('root')
);

import React from "react";
import AppStore from '../App.store.js'

const RestartGame = () => (
    <button onClick={AppStore.restartGame}>
        Restart Game
    </button>
);

export default RestartGame;
import React from "react";
import { observer } from "mobx-react";
import AppStore from './App.store.js'
import './index.css';
import Field from './components/Field';
import Board from './components/Board';
import RestartGame from './components/RestartGame';
import styled from 'styled-components';

const BoardGame = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

@observer
export default class App extends React.Component {
    onClick() {
        AppStore.number++
    }

    render() {
        return (
            <div>
                Current player: {AppStore.currentSign}
                <br/>
                {AppStore.winner.winner ? `${AppStore.winner.name} Won` : 'Let\'s play'}
                <br/>
                <RestartGame />
                <BoardGame>
                    {/*{AppStore.number}*/}
                    {/*<div onClick={this.onClick}>Click me</div>*/}
                    <Board>
                        {
                            AppStore.gameFields.map((field, i) => (
                                <Field key={i} sign={field} onClick={() => AppStore.playerMove(i)}/>
                            ))
                        }
                    </Board>
                </BoardGame>
            </div>
        );
    }
}

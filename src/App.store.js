import { observable, computed } from "mobx";
import {getWinner} from './helpers/get-winner'

class TodoListModel {
  @observable number = 1;
  @observable currentSign = 'X';
  @observable gameFields = new Array(9);

  playerMove(i){
    this.gameFields[i] = this.currentSign;
    this.currentSign = this.currentSign === 'X' ? 'O' : 'X';
  }

  restartGame = () => {
    this.gameFields = new Array(9);
  }

  @computed get winner(){
    return getWinner(this.gameFields)
  }
}

export default new TodoListModel()
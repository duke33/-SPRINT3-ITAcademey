var scoreBoard = require('score-board');
var Player = require('player');

class Game{
  constructor(){
  this.playersInGame = []
  this.gameScoreBoard = new ScoreBoard()

}

  joinGame(Player) {
    if (this.playersInGame.some(name => name === Player.name)) {
        console.log(`${Player.name} player has already joined the Game!`)

    } else {// aca hay que poner el board!!!
        this.playersInGame.push({ name: Player.name, points: 0 })
        this.gameScoreBoard.board.push({ Player, points: 0 })

    }
}



}
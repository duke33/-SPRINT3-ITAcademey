const ScoreBoard = require('./score-board.js');

class Game{
  constructor(){
  this.playersInGame = []
  this.gameScoreBoard = new ScoreBoard()

}

  joinGame(Player) {
    //TODO tal vez borrar este playersInGame y pasar toda la logic esa la board, porque es innecesario
    if (this.gameScoreBoard.board.some(e => e.name === Player.name)) {
        console.log(`${Player.name} has already joined the Game!`)

    } else {
        this.gameScoreBoard.board.push({ name: Player.name, points: 0 })

    }
}

}

module.exports =Game


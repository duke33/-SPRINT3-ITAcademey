const Player = require('./player');
const Game = require('./game.js');



//Create a new game
const myGame = new Game()

//Players are created and joined to the game, on the same line
myGame.joinGame(new Player("Pepe"))
myGame.joinGame(new Player("Pepe"))
myGame.joinGame(new Player("Juliana"))
myGame.joinGame(new Player("Manuela"))
myGame.joinGame(new Player("Roberto"))
myGame.joinGame(new Player("Julia"))

//Players score is modified
myGame.gameScoreBoard.addOrSubtractPoints("Pepe", 5) 
myGame.gameScoreBoard.addOrSubtractPoints("Juliana", 10)
myGame.gameScoreBoard.addOrSubtractPoints("Manuela", -2)
myGame.gameScoreBoard.addOrSubtractPoints("Roberto", 0)

//Self explanatory 
myGame.gameScoreBoard.showScore()
myGame.gameScoreBoard.showWinner()

//TODO aca instanciar un nuevo board, para mostrar que funciona como singleton

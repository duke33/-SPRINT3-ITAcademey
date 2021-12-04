const Player = require('./player');
const Game = require('./game.js');
const ScoreBoard = require('./score-board.js');

//Create a new game
const myGame = new Game()

//Players are created and joined to the game, on the same line
myGame.joinGame(new Player("Pepe"))
myGame.joinGame(new Player("Pepe")) //To show that a player can't join the game two times
myGame.joinGame(new Player("Juliana"))
myGame.joinGame(new Player("Manuela"))
myGame.joinGame(new Player("Roberto"))
myGame.joinGame(new Player("Julia"))

//Players score is modified
myGame.gameScoreBoard.addOrSubtractPoints("Pepe", 5) 
myGame.gameScoreBoard.addOrSubtractPoints("Juliana", 10)
myGame.gameScoreBoard.addOrSubtractPoints("Manuela", -2)
myGame.gameScoreBoard.addOrSubtractPoints("Roberto", 1)

//This demonstrates that the score board IS a singleton, since creating a new instance, returns the already existent instance created inside the new Game logic
const newScoreBoardInstance = new ScoreBoard()
newScoreBoardInstance.addOrSubtractPoints("Roberto", 4) //Roberto will have 5 points!

//Self explanatory 
myGame.gameScoreBoard.showScore()
myGame.gameScoreBoard.showWinner()

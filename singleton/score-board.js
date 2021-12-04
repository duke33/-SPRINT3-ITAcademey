//Construye una aplicación que cree varios Jugadores. Los jugadores podrán ser añadidos a un juego, que mostrará un marcador con las puntuaciones y el ganador. La aplicación debe poder añadir o quitar puntos a cada jugador para que el marcador cambie. La clase Marcador debe implementar un patrón Singleton como requisito indispensable.

let instance = null;

class ScoreBoard {
    constructor() {
        this.value = Math.random(100)
        this.board = []
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    //Methods

    joinGame(name) {
        if (this.board.some(e => e.name === name)) {
            console.log(`${name} player has already joined the Game!`)
        } else {
            this.board.push({ name: name, points: 0 })
        }
    }

    addOrSubstractPoints(name, pointsToAdd) {
        let currentPlayerIndex = this.board.findIndex(obj => name === obj.name);
        this.board[currentPlayerIndex].points += pointsToAdd
    }

    sort() {

        return this.board.sort((a, b) => b.points - a.points);

    }

    showWinner() {
        console.log(`The Winer is ${this.sort()[0].name}!!!!!!`)
    }

    showScore() { //TODO
        console.log("Score Board: ",
            this.sort())

    }

}

//Checking the class behaves as a Singleton:
const checkSingleton = () => {
    console.log("Class behaves as a singleton: ", (new ScoreBoard().value === new ScoreBoard().value) ? true : false)
}
checkSingleton()

const Game = new ScoreBoard()

Game.joinGame("Pepe")
Game.joinGame("Juliana")
Game.joinGame("Manuela")
Game.joinGame("Roberto")
Game.joinGame("Julia")

Game.addOrSubstractPoints("Juliana", 10)
Game.addOrSubstractPoints("Manuela", -2)
Game.addOrSubstractPoints("Roberto", 0)
Game.addOrSubstractPoints("Pepe", 5)

Game.showScore()
Game.showWinner()

module.exports= ScoreBoard
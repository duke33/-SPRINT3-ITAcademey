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

    addOrSubtractPoints(name, pointsToAdd) {
        let currentPlayerIndex = this.board.findIndex(obj => name === obj.name);
        this.board[currentPlayerIndex].points += pointsToAdd
    }

    sort() {

        return this.board.sort((a, b) => b.points - a.points);

    }

    showWinner() {
        console.log(`The Winer is ${this.sort()[0].name}!!!!!!`)
    }

    showScore() {
        console.log("Score Board: ",
            this.sort())

    }

}

//Checking the class behaves as a Singleton:
// const checkSingleton = () => {
//     console.log("Class behaves as a singleton: ", (new ScoreBoard().value === new ScoreBoard().value) ? true : false)
// }
// checkSingleton()

module.exports = ScoreBoard
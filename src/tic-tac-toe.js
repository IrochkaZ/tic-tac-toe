class TicTacToe {
    constructor() {
        this.mover = 'x';
        this.step = 0;
        this.square = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    changePlayer() {
        (this.mover == 'o') ? this.mover = 'x': this.mover = 'o';
    }

    getCurrentPlayerSymbol() {
        return this.mover;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.square[rowIndex][columnIndex] === null) {
            if (this.mover == 'x') {
                this.square[rowIndex][columnIndex] = 1;
            } else {
                this.square[rowIndex][columnIndex] = 0;
            }
            this.step++;
            this.changePlayer();
        }
    }

    isFinished() {
        const winner = this.getWinner();
        return (winner !== null || this.step >= 9) ? true : false;
    }

    getWinner() {
        if (
            (this.square[0][0] == 0 && this.square[0][1] == 0 && this.square[0][2] == 0) || (this.square[1][0] == 0 && this.square[1][1] == 0 && this.square[1][2] == 0) ||
            (this.square[2][0] == 0 && this.square[2][1] == 0 && this.square[2][2] == 0) || (this.square[0][0] == 0 && this.square[1][0] == 0 && this.square[2][0] == 0) ||
            (this.square[0][1] == 0 && this.square[1][1] == 0 && this.square[2][1] == 0) || (this.square[0][2] == 0 && this.square[1][2] == 0 && this.square[2][2] == 0) ||
            (this.square[0][0] == 0 && this.square[1][1] == 0 && this.square[2][2] == 0) || (this.square[0][2] == 0 && this.square[1][1] == 0 && this.square[2][0] == 0)
        ) {
            return 'o';
        } else if (
            (this.square[0][0] == 1 && this.square[0][1] == 1 && this.square[0][2] == 1) || (this.square[1][0] == 1 && this.square[1][1] == 1 && this.square[1][2] == 1) ||
            (this.square[2][0] == 1 && this.square[2][1] == 1 && this.square[2][2] == 1) || (this.square[0][0] == 1 && this.square[1][0] == 1 && this.square[2][0] == 1) ||
            (this.square[0][1] == 1 && this.square[1][1] == 1 && this.square[2][1] == 1) || (this.square[0][2] == 1 && this.square[1][2] == 1 && this.square[2][2] == 1) ||
            (this.square[0][0] == 1 && this.square[1][1] == 1 && this.square[2][2] == 1) || (this.square[0][2] == 1 && this.square[1][1] == 1 && this.square[2][0] == 1)
        ) {
            return 'x';
        }
        return null;
    }

    noMoreTurns() {
        return (this.step < 9) ? false : true;
    }

    isDraw() {
        return (this.isFinished() == false || this.getWinner() != null) ? false : true;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.square[rowIndex][colIndex] == 0) {
            return 'o'
        } else if (this.square[rowIndex][colIndex] == 1) {
            return 'x'
        } else {
            return null;
        }

    }
}

module.exports = TicTacToe;
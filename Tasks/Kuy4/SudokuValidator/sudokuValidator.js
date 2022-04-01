function sudokuValidator(board){
    if ([].concat(...board).some(el => el === 0)) return false;

    let example = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let el of board) {
        let check = [];
        for (let i = 0; i < el.length; i++) {
            check.push(el[i]);
        }
        if (!example.every(el => check.includes(el))) return false
    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let check = [];
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    check.push(board[i + k][j + l]);
                }
            }
            if(!example.every(el => check.includes(el))) return false;
        }
    }
    return true;
}

module.exports = sudokuValidator;
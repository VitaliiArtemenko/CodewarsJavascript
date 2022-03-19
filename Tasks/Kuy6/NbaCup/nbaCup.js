function nbaCup(resultSheet, toFind) {
    if (toFind === '') {
        return '';
    }

    const totalResults = resultSheet.split(',');
    const commandResults = totalResults.filter(el => el.includes(toFind));

    for (let el of commandResults) {
        if (!el.replace(/[a-zA-Z]+/g, '').split(' ').every(el => Number.isInteger(+el))) {
            return `Error(float number):${el}`;
        }
    }

    let W = 0;
    let D = 0;
    let L = 0;
    let scored = 0;
    let conceded = 0;

    if (!toFind.split(' ').every(el => commandResults[0].split(' ').includes(el))) {
        return `${toFind}:This team didn't play!`;
    }

    for (let el of commandResults) {
        let oneGame = el.match(/\d+/g).map(Number);
        if (el.split(' ')[0] === toFind.split(' ')[0]) {
            scored += oneGame[0];
            conceded += oneGame[oneGame.length - 1];
            if (oneGame[0] > oneGame[oneGame.length - 1]) {
                W++;
            } else if (oneGame[0] < oneGame[oneGame.length - 1]) {
                L++
            } else D++;
        } else {
            scored += oneGame[oneGame.length - 1];
            conceded += oneGame[0];
            if (oneGame[0] > oneGame[oneGame.length - 1]) {
                L++;
            } else if (oneGame[0] < oneGame[oneGame.length - 1]) {
                W++;
            } else D++;
        }
    }
    return `${toFind}:W=${W};D=${D};L=${L};Scored=${scored};Conceded=${conceded};Points=${W * 3 + D}`;
}

module.exports = nbaCup;

function presses(phrase) {
    const keypads = {
        1: ['A','D','G','J','M','P','T','W','*','#',' ','1'],
        2: ['B','E','H','K','N','Q','U','X','0'],
        3: ['C','F','I','L','O','R','V','Y'],
        4: ['S','Z','2','3','4','5','6','8'],
        5: ['7','9']
    }
    let taps = 0;

    for (let letter of phrase.toUpperCase()) {
        for (let key in keypads) {
            if (keypads[key].includes(letter)) {
                taps += +key;
            }
        }
    }
    return taps;
}

module.exports = presses;


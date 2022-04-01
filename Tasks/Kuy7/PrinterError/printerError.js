function printerError(s) {
    const checker = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let errors = 0;
    for (let char of s) {
        if(checker.includes(char)) {
            errors++;
        }
    }
    return `${errors}/${s.length}`;
}

module.exports = printerError;
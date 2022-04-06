function countSmileys(arr) {
    let faces = 0;
    for (let el of arr) {
        let parts = el.split('');

        if(parts.length === 2) {
            if ((parts[0] === ':' || parts[0] === ';')
                && (parts[1] === ')' || parts[1] === 'D'))
                faces++;
        } else {
            if ((parts[0] === ':' || parts[0] === ';')
                && (parts[1] === '-' || parts[1] === '~')
                && (parts[2] === ')' || parts[2] === 'D'))
                faces++;
        }

    }
    return faces;
}

module.exports = countSmileys;
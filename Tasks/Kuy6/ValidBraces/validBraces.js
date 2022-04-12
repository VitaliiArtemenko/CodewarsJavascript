function validBraces(braces) {
    let parentheses = 0;
    let brackets = 0;
    let curlyBraces = 0;

    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === '(') {
            if (braces[i + 1] === ']' || braces[i + 1] === '}') {
                return false;
            } else parentheses++;
        } else if (braces[i] === ')') parentheses--;
        if (parentheses < 0) return false;

        if (braces[i] === '[') {
            if (braces[i + 1] === ')' || braces[i + 1] === '}') {
                return false;
            } else brackets++;
        } else if (braces[i] === ']') brackets--;
        if (brackets < 0) return false;

        if (braces[i] === '{') {
            if (braces[i + 1] === ']' || braces[i + 1] === ')') {
                return false;
            } else curlyBraces++;
        } else if (braces[i] === '}') curlyBraces--;
        if (curlyBraces < 0) return false;

    }
    return parentheses === 0 && brackets === 0 && curlyBraces === 0;
}

module.exports= validBraces;
function validParentheses(parens) {
    let result = [];
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            result.push(parens[i])
        } else if (parens[i] === ')') {
            if (result[result.length - 1] === '(') {
                result.pop();
            } else return false;
        }
    }
    return result.length === 0;
}

module.exports = validParentheses;
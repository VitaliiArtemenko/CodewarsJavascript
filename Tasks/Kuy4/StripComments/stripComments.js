function stripComments(input, markers) {
    let stripedComment = [];
    let letters = input.split('\n');
    for (let i = 0; i < letters.length; i++) {
        let temp = '';
        for (let j = 0; j < letters[i].length; j++) {
            if (!markers.includes(letters[i][j])) {
                temp += letters[i][j];
            } else break;
        }
        stripedComment[i] = temp.trim();
    }
    return stripedComment.join('\n');
}

module.exports = stripComments;
function likeOrDislike(buttons) {
    let result = 'Nothing';

    for (let button of buttons) {
        if (button === result) {
            result = 'Nothing';
        } else result = button;
    }
    return result;
}

module.exports = likeOrDislike;
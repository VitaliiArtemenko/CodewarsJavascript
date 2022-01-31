function handler(key, isCaps = false, isShift = false) {
    const shift = {'1': '!', '2': '@', '3': '#', '4': '$', '5': '%',
    '6': '^', '7': '&', '8': '*', '9': '(', '0': ')', '-': '_', '=': '+', '[' : '{', ']': '}',
    ';': ':', '\'': '"', ',': '<', '.': '>', '/': '?', '\\': '|', '`': '~'};
    const shiftArr = ['-', '=', '[', ']', ';', "'", '"', ',', '.', '/', '\\', '`'];

    if (typeof key !== 'string' || key.length !== 1) {
        return 'KeyError';
    } else if (isNaN(key)) {
        if (key.toUpperCase() === key) {
            if (shiftArr.includes(key) && isShift) {
                return shift[key];
            } else if (shiftArr.includes(key)) {
                return key;
            } else return 'KeyError';
        } else if ((isCaps && !isShift) || (!isCaps && isShift)) {
            if (shiftArr.includes(key)) {
                return shift[key];
            } else if (isCaps || isShift) {
                return key.toUpperCase();
            } else return key;
        } else return key;
    } else if (isShift) {
        return shift[key];
    } else return key;
}

module.exports = handler;
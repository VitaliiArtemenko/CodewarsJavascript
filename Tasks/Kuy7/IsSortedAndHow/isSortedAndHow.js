function isSortedAndHow(array) {
    const arrOrigin = [...array];
    if(JSON.stringify(arrOrigin) === JSON.stringify(array.sort((a, b) => a - b))) return 'yes, ascending';
    else if(JSON.stringify(arrOrigin) === JSON.stringify(array.sort((a, b) => b - a))) return 'yes, descending';
    else return 'no';
}

module.exports = isSortedAndHow;
function roundIt(n){
    let numbers = n.toString().split('.');
    return numbers[0].length > numbers[1].length ? Math.floor(n)
        : numbers[0].length === numbers[1].length ? Math.round(n) : Math.ceil(n);
}

module.exports = roundIt;
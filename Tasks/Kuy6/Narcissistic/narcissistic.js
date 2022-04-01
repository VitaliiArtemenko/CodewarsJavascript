function narcissistic(value){
    return  value.toString().split('').map(Number).map(el => Math.pow(el, value.toString().length))
        .reduce((a, b) => a + b) === value;
}

module.exports = narcissistic;
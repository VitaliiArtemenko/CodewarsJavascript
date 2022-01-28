function whatNumberIsIt(n){
    switch (n + '') {
        case 'Infinity':
            return 'Input number is Number.POSITIVE_INFINITY';
        case '-Infinity':
            return 'Input number is Number.NEGATIVE_INFINITY';
        case '1.7976931348623157e+308':
            return 'Input number is Number.MAX_VALUE';
        case'5e-324':
            return 'Input number is Number.MIN_VALUE';
        case 'NaN':
            return 'Input number is Number.NaN';
        default:
            return 'Input number is ' + n;
    }
}

module.exports = whatNumberIsIt;
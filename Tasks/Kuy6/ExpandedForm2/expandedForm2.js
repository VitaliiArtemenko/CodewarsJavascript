function expandedForm2(num) {
    const wholeNumber = num.toString().split('.')[0].split('').reverse();
    const decimalNumber = num.toString().split('.')[1].split('').reverse();
    let expandedWholeNumber = '';
    let expandedDecimalNumber = '';
    let decimalCount = 1;

    for (let i = wholeNumber.length - 1; i >= 0; i--) {
        if (wholeNumber[i] !== '0') {
            expandedWholeNumber += wholeNumber[i] + '0'.repeat(i) + ' + ';
        }
    }

    for (let i = decimalNumber.length - 1; i >= 0; i--, decimalCount++) {
        if (decimalNumber[i] !== '0') {
            expandedDecimalNumber += decimalNumber[i] + '/1' + '0'.repeat(decimalCount) + ' + ';
        }
    }

    return (expandedWholeNumber + expandedDecimalNumber).slice(0, -3);
}

module.exports = expandedForm2;



function expandedForm(num) {
    const digits = num.toString().split('').reverse();
    let expandedNumber = '';

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== '0') {
            expandedNumber += digits[i] + '0'.repeat(i) + ' + ';
        }
    }
    return expandedNumber.slice(0, -3);
}

module.exports = expandedForm;
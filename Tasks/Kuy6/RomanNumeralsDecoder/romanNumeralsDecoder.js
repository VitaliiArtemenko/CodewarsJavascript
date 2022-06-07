function romanNumeralsDecoder (roman) {
    const converter = {
        'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 };
    let number = 0;

    for (let i = 0; i < roman.length; i++) {
        if(converter[roman[i]] < converter[roman[i + 1]]) {
            number -= converter[roman[i]];
        } else number += converter[roman[i]];
    }
    return number;
}

module.exports = romanNumeralsDecoder;
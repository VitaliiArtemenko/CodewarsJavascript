function multiTable(number) {
    let result = '';

    for(let i = 1; i <= 10; i++) {
        result += `${i} * ${number} = ${number * i}\n`;
    }
    return result.trim();
}

module.exports = multiTable;
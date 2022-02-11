function pattern(n){
    let output = '1\n';
    for (let i = 1; i < n; i++) {
        output += '1' + '*'.repeat(i) + `${i + 1}` + '\n';
    }
    return output.trim();
}

module.exports = pattern;
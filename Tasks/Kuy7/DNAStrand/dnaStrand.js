function dnaStrand(dna){
    let dnaArr = dna.split('');
    for (let i = 0; i < dnaArr.length; i++) {
        if (dnaArr[i] === 'A') {
            dnaArr[i] = 'T';
        } else if (dnaArr[i] === 'T') {
            dnaArr[i] = 'A';
        } else if (dnaArr[i] === 'C') {
            dnaArr[i] = 'G';
        } else dnaArr[i] = 'C';
    }
    return dnaArr.join('');
}

module.exports = dnaStrand;
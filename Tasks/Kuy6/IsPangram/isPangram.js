function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(el => string.toLowerCase().includes(el));
}

module.exports = isPangram;
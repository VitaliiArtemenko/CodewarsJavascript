function longestVowelChain(s){
    return Math.max(...s.split(/[^aeiou]/gi).map(el => el.length))
}

module.exports = longestVowelChain;
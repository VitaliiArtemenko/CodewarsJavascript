function removeRotten(bagOfFruits){
    return !bagOfFruits ? [] : bagOfFruits.map(el => el.replace('rotten', '').toLowerCase());
}

module.exports = removeRotten;
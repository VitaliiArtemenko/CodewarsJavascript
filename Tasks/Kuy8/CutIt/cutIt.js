function cutIt(arr){
    return arr.map(el => el.slice(0, Math.min(...arr.map(el => el.length))));
}

module.exports = cutIt;
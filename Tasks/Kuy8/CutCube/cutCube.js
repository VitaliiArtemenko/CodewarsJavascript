function cutCube(volume, n){
    return  Number.isInteger(Math.cbrt(volume / n)) && Number.isInteger(Math.cbrt(n));
}

module.exports = cutCube;
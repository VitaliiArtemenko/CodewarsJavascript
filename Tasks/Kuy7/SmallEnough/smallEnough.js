function smallEnough(a, limit){
    return a.every(el => el <= limit);
}

module.exports = smallEnough;


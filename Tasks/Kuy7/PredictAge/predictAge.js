function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    return Math.floor(Math.hypot(age1,age2,age3,age4,age5,age6,age7,age8) / 2);
}

module.exports = predictAge;
function iTri(s){
    let obj = {};
    let rest = (140.6 - s).toFixed(2);

    if (s === 0) {
        return 'Starting Line... Good Luck!';
    } else if (s < 2.4) {
        obj.Swim = `${rest} to go!`;
    } else if (s < 114.4) {
        obj.Bike = `${rest} to go!`;
    } else if (s < 130.6) {
        obj.Run = `${rest} to go!`;
    } else if (s < 140.6) {
        obj.Run = 'Nearly there!';
    } else return "You're done! Stop running!";
    return obj;
}

module.exports = iTri;
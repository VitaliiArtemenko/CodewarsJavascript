function killer(suspectInfo, dead) {
    for (let key in suspectInfo) {
        if (dead.every(el => suspectInfo[key].includes(el))) {
            return key;
        }
    }
}

module.exports = killer;
function isValidWalk(walk) {
    let n = walk.filter(el => el === 'n').length;
    let s = walk.filter(el => el === 's').length;
    let w = walk.filter(el => el === 'w').length;
    let e = walk.filter(el => el === 'e').length;

    return walk.length === 10 && n === s && w === e;
}

module.exports = isValidWalk;
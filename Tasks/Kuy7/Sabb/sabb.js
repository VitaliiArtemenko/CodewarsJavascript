function sabb(s, val, happiness){
    let word = ['s', 'a', 'b', 't', 'c', 'l', 'i'];
    return s.split('').filter(el => word.includes(el)).length + val + happiness > 22 ?
        'Sabbatical! Boom!' : 'Back to your desk, boy.';
}

module.exports = sabb;
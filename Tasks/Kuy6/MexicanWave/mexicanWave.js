function mexicanWave(str){
    const waves = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ')  {
            waves.push(str.slice(0, i) + str.slice(i, i + 1).toUpperCase() + str.slice(i + 1, str.length));
        }
    }
    return waves;
}

module.exports = mexicanWave;
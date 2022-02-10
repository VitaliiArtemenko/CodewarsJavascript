function determineTime(durations){
    let time = 0;

    for (let i = 0; i < durations.length; i++) {
        const tempArr = durations[i].split(':');
        time += +tempArr[0] * 3600 + +tempArr[1] * 60 + +tempArr[2];
    }
    return time / 3600 <= 24;
}

module.exports = determineTime;
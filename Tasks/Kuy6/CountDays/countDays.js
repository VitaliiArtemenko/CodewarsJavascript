function countDays(d){
    let diff = Math.round((d - new Date(Date.now())) / (24 * 60 * 60 * 1000));

    return diff === 0 ? 'Today is the day!' : diff < 0 ? 'The day is in the past!' : `${diff} days`;
}

module.exports = countDays;
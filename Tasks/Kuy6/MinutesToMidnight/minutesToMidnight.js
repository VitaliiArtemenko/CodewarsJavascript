function minutesToMidnight(d){
    let diff = Math.round((new Date(Date.now()).setHours(24,0,0,0) - d) / 60000);

    return diff === 1 ? `${diff} minute` : `${diff} minutes`;
}

module.exports = minutesToMidnight;
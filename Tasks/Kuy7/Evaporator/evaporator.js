function evaporator(content, evap_per_day, threshold){
    const thresholdMl = content / 100  * threshold;
    let days = 0;

    while (content >= thresholdMl) {
        content = content - (content * (evap_per_day / 100));
        days++;
    }
    return days;
}

module.exports = evaporator;
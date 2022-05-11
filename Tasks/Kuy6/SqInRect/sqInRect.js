function sqInRect(lng, wdth){
    if (lng === wdth) return null;

    const result = [];

    while (lng !== wdth) {
        if (lng > wdth) {
            lng -= wdth;
            result.push(wdth);
        }
        if (lng < wdth) {
            wdth -= lng;
            result.push(lng)
        }
    }
    result.push(lng);
    return result;
}

module.exports = sqInRect;
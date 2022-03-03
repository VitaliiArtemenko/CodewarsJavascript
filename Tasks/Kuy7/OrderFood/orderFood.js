function orderFood(list) {
    let result = {};
    for (let i = 0; i < list.length; i++) {
        if (!(list[i].meal in result)) {
            result[list[i].meal] = 1;
        } else {
            result[list[i].meal]++;
        }
    }
    return result;
}

module.exports = orderFood;
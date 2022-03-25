function cakes(recipe, available) {
    let result = [];
    const ingredients = Object.keys(recipe);

    for (let el of ingredients) {
        if(!(el in available)) {
            return 0;
        } else result.push(Math.trunc(available[el] / recipe[el]));
    }
    return Math.min(...result);
}

module.exports = cakes;
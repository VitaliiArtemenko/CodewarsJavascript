function bloodAlcoholContent(drinks, weight, sex, time){
    let ratio = sex === 'male' ? 0.73 : 0.66;
    return (((drinks.ounces * drinks.abv) * 5.14 / weight * ratio) - 0.015 * time).toFixed(4) * 1.0;
}

module.exports = bloodAlcoholContent;
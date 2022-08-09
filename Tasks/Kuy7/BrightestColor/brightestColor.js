function brightestColor(colors){
    let rgb = colors.map(el => el.replace('#', '').match(/.{1,2}/g))
    let nums = []

    for (let color of rgb) {
        let temp = color.map(el => parseInt(el, 16))
        nums.push(Math.max(...temp))
    }
    return colors[nums.indexOf(Math.max(...nums))]
}

module.exports = brightestColor;
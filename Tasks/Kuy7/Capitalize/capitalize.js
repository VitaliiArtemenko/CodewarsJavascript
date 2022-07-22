function capitalize(s){
    return [s.split('').map((el, i) => i % 2 === 0 ? el.toUpperCase() : el).join(''),
        s.split('').map((el, i) => i % 2 !== 0 ? el.toUpperCase() : el).join('')]
}

module.exports = capitalize;
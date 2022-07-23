function capitalize(s, arr){
    return s.split('').map((el, i) => arr.includes(i) ? el.toUpperCase() : el).join('');
}

module.exports = capitalize;
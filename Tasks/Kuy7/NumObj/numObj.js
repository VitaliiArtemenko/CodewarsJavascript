function numObj(s){
    return s.map(el => el = {[el] : String.fromCharCode(el)});
}

module.exports = numObj;
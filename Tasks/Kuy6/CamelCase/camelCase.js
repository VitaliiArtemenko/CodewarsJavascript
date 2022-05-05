String.prototype.camelCase=function(){
    return this.split(' ').filter(el => el !== "").map(el => el.substring(0, 1).toUpperCase() + el.substring(1)).join('');
}

module.exports = String.prototype.camelCase;
function pigIt(str){
    return str.split(' ').map(x =>/[a-zA-Z]+/.test(x) ? x.slice(1)+x[0]+'ay' : x).join(' ');
}
module.exports = pigIt;
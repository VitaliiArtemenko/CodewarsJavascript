function colorOf(r, g, b){
    const colorR = r.toString(16).length < 2 ? '0' + r.toString(16) : r.toString(16);
    const colorG = g.toString(16).length < 2 ? '0' + g.toString(16) : g.toString(16);
    const colorB = b.toString(16).length < 2 ? '0' + b.toString(16) : b.toString(16);
    return '#' + colorR + colorG + colorB;
}

module.exports = colorOf;
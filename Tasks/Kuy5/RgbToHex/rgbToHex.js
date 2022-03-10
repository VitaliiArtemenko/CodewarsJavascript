function rgbToHex(r, g, b){
    let rHex = r < 0 ? '00' : r > 255 ? 'FF' : r.toString(16).toUpperCase().padStart(2, '0');
    let gHex = g < 0 ? '00' : g > 255 ? 'FF' : g.toString(16).toUpperCase().padStart(2, '0');
    let bHex = b < 0 ? '00' : b > 255 ? 'FF' : b.toString(16).toUpperCase().padStart(2, '0');

    return rHex + gHex + bHex;
}

module.exports = rgbToHex;
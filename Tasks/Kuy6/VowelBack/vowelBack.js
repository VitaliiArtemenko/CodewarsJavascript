function vowelBack(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const except = ['c', 'o', 'd', 'e'];
    let result = '';

    for (let letter of s) {
        let tempNum = 0;
        let tempLetter = '';
        if (letter === 'c' || letter === 'o') {
            result += String.fromCharCode(letter.charCodeAt(0) - 1);
        } else if (letter === 'd' || letter === 'e') {
            result += 'a';
        } else if (letter === 'i') {
            result += letter;
        } else if (letter === 'a') {
            result += 'v';
        } else if (letter === 'u') {
            result += 'p';
        } else if(vowels.indexOf(letter) === -1) {
                tempNum = letter.charCodeAt(0) + 9;
                if (tempNum > 122) {
                    tempLetter = String.fromCharCode(tempNum - 26);
                } else tempLetter = String.fromCharCode(letter.charCodeAt(0) + 9);
            }
        if (except.indexOf(tempLetter) === -1) {
            result += tempLetter;
        } else result += letter;
    }
    return result;
}

module.exports = vowelBack;
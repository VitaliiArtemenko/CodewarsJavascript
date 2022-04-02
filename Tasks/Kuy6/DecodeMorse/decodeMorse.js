function decodeMorse(morseCode) {
    const  MORSE_CODE =  {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };

    let message = '';
    let codes = morseCode.trim().split('   ').map(el => el.split(' '));
    for (let i = 0; i < codes.length; i++) {
        for (let j = 0; j < codes[i].length; j++) {
            message += MORSE_CODE[codes[i][j]];
        }
        message += ' ';
    }
    return message.trim().toUpperCase();
}

module.exports = decodeMorse;


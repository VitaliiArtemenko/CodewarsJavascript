const decodeMorseTest = require('./decodeMorse');

describe('Decode the Morse code', () => {

    it('Test_1', () => {
        expect(decodeMorseTest('.... . -.--   .--- ..- -.. .')).toEqual('HEY JUDE');
    });

    it('Test_2', () => {
        expect(decodeMorseTest('.-')).toEqual('A');
    });

    it('Test_3', () => {
        expect(decodeMorseTest('   .   . ')).toEqual('E E');
    });

    it('Test_4', () => {
        expect(decodeMorseTest('. .')).toEqual('EE');
    });

    it('Test_5', () => {
        expect(decodeMorseTest('...   ---   ...')).toEqual('S O S');
    });
});
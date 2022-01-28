const generateLinkTest = require('./generateLink');

describe('Generate user links', () => {

    it('Test_1', () => {
        expect(generateLinkTest('matt c')).toEqual('http://www.codewars.com/users/matt%20c');
    });

    it('Test_2', () => {
        expect(generateLinkTest('GiacomoSorbi')).toEqual('http://www.codewars.com/users/GiacomoSorbi');
    });

    it('Test_3', () => {
        expect(generateLinkTest('_L5##:b:_{kud51A>")k'))
            .toEqual('http://www.codewars.com/users/_L5%23%23%3Ab%3A_%7Bkud51A%3E%22)k');
    });

    it('Test_4', () => {
        expect(generateLinkTest('H`B,3*?oW_|"$y6+Ff+(4B6q~'))
            .toEqual('http://www.codewars.com/users/H%60B%2C3*%3FoW_%7C%22%24y6%2BFf%2B(4B6q~');
    });

    it('Test_5', () => {
        expect(generateLinkTest('30C,0.|p_{<,}P(u@i,'))
            .toEqual('http://www.codewars.com/users/30C%2C0.%7Cp_%7B%3C%2C%7DP(u%40i%2C');
    });

    it('Test_6', () => {
        expect(generateLinkTest('r%%/:H/587%6_I?!qni)uh7'))
            .toEqual('http://www.codewars.com/users/r%25%25%2F%3AH%2F587%256_I%3F!qni)uh7');
    });

});
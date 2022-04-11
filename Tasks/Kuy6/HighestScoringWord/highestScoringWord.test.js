const highestScoringWordTest = require('./highestScoringWord');

describe('Highest Scoring Word', () => {

    it('Test_1', () => {
        expect(highestScoringWordTest('man i need a taxi up to ubud')).toEqual('taxi');
    });

    it('Test_2', () => {
        expect(highestScoringWordTest('what time are we climbing up the volcano')).toEqual('volcano');
    });

    it('Test_3', () => {
        expect(highestScoringWordTest('take me to semynak')).toEqual('semynak');
    });

    it('Test_4', () => {
        expect(highestScoringWordTest('aa b')).toEqual('aa');
    });

    it('Test_5', () => {
        expect(highestScoringWordTest('b aa')).toEqual('b');
    });

    it('Test_6', () => {
        expect(highestScoringWordTest('bb d')).toEqual('bb');
    });

    it('Test_7', () => {
        expect(highestScoringWordTest('d bb')).toEqual('d');
    });

    it('Test_8', () => {
        expect(highestScoringWordTest('aaa b')).toEqual('aaa');
    });
});
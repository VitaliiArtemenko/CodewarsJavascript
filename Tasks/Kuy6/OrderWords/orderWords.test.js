const orderWordsTest = require('./orderWords');

describe('Your order, please', () => {

    it('Test_1', () => {
        expect(orderWordsTest('is2 Thi1s T4est 3a')).toEqual('Thi1s is2 3a T4est');
    });

    it('Test_2', () => {
        expect(orderWordsTest('4of Fo1r pe6ople g3ood th5e the2'))
            .toEqual('Fo1r the2 g3ood 4of th5e pe6ople');
    });

    it('Test_3', () => {
        expect(orderWordsTest('')).toEqual('');
    });

    it('Test_4', () => {
        expect(orderWordsTest('Ali1ce I3gor Gre7g Heid8i 6Cindy 4Fiona 5Ernst Jam2ila'))
            .toEqual('Ali1ce Jam2ila I3gor 4Fiona 5Ernst 6Cindy Gre7g Heid8i');
    });

    it('Test_5', () => {
        expect(orderWordsTest('C3indy Gr2eg J1amila')).toEqual('J1amila Gr2eg C3indy');
    });
});
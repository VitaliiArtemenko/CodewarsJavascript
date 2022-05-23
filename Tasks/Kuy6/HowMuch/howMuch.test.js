const howMuchTest = require('./howMuch');

describe('How Much?', () => {

    it('Test_1', () => {
        expect(howMuchTest(1, 100)).toEqual([["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]);
    })

    it('Test_2', () => {
        expect(howMuchTest(2950, 2950)).toEqual([]);
    })

    it('Test_3', () => {
        expect(howMuchTest(10000, 9950)).toEqual([['M: 9991', 'B: 1427', 'C: 1110']]);
    })

    it('Test_4', () => {
        expect(howMuchTest(0,200))
            .toEqual([['M: 37', 'B: 5', 'C: 4'], ['M: 100', 'B: 14', 'C: 11'], ['M: 163', 'B: 23', 'C: 18']]);
    })

    it('Test_5', () => {
        expect(howMuchTest(20000, 20100))
            .toEqual([['M: 20008', 'B: 2858', 'C: 2223'], ['M: 20071', 'B: 2867', 'C: 2230']]);
    })

    it('Test_6', () => {
        expect(howMuchTest(60527, 60632)).toEqual([['M: 60580', 'B: 8654', 'C: 6731']]);
    })
})
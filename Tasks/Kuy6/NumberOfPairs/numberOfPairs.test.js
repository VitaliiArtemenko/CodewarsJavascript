const numberOfPairsTest = require('./numberOfPairs');

describe('Pair of gloves', () => {

    it('Test_1', () => {
        expect(numberOfPairsTest(['gray','black','purple','purple','gray','black'])).toEqual(3);
    })

    it('Test_2', () => {
        expect(numberOfPairsTest(['Teal', 'Red', 'Lime', 'White', 'Navy', 'Olive', 'Navy', 'White', 'Navy',
            'Lime', 'Maroon', 'Yellow', 'Silver', 'Yellow', 'Lime', 'Green', 'White', 'Olive', 'White', 'Yellow',
            'Purple', 'White', 'Navy', 'Navy', 'Green', 'Aqua', 'Olive', 'Purple', 'Green', 'Black', 'Gray', 'Teal',
            'Silver', 'Fuchsia'])).toEqual(11);
    })

    it('Test_3', () => {
        expect(numberOfPairsTest(["red", "red", "red", "red", "red", "red"])).toEqual(3);
    })

    it('Test_4', () => {
        expect(numberOfPairsTest(["red", "green", "red", "blue", "blue"])).toEqual(2);
    })

    it('Test_5', () => {
        expect(numberOfPairsTest(['red','green','blue'])).toEqual(0);
    })
})
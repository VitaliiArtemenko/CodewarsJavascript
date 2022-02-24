const sortByLengthTest = require('./sortByLength');

describe('Sort array by string length', () => {

   it('Test_1', () => {
       expect(sortByLengthTest(["Beg", "Life", "I", "To"])).toEqual(["I", "To", "Beg", "Life"]);
   });

    it('Test_2', () => {
        expect(sortByLengthTest(["", "Moderately", "Brains", "Pizza"])).toEqual(["", "Pizza", "Brains", "Moderately"]);
    });

    it('Test_3', () => {
        expect(sortByLengthTest(["Longer", "Longest", "Short"])).toEqual(["Short", "Longer", "Longest"]);
    });

    it('Test_4', () => {
        expect(sortByLengthTest([ 'A longer sentence', 'The longest sentence','A short sentence' ]))
            .toEqual([ 'A short sentence', 'A longer sentence', 'The longest sentence' ]);
    });

    it('Test_5', () => {
        expect(sortByLengthTest([ 'Dog', 'Food', 'A', 'Of' ])).toEqual([ 'A', 'Of', 'Dog', 'Food' ]);
    });
});
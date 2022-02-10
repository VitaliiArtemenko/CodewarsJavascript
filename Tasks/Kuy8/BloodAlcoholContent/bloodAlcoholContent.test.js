const bloodAlcoholContentTest = require('./bloodAlcoholContent');

describe('Blood-Alcohol Content', () => {

    it('Test_1', () => {
        expect(bloodAlcoholContentTest({ounces:12.5, abv:0.4}, 190, 'male', 1))
            .toEqual(0.0837);
    });

    it('Test_2', () => {
        expect(bloodAlcoholContentTest({ounces:180, abv:0.05}, 160,'female', 1))
            .toEqual(0.1758);
    });

    it('Test_3', () => {
        expect(bloodAlcoholContentTest({ounces:50, abv:0.14}, 250,'male', 3))
            .toEqual(0.0601);
    });

    it('Test_4', () => {
        expect(bloodAlcoholContentTest({ounces:20, abv:0.4}, 100,'female', 2))
            .toEqual(0.2414);
    });
});
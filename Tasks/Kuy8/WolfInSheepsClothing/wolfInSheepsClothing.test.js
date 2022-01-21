const wolfInSheepsClothingTest = require('./wolfInSheepsClothing');

describe("A wolf in sheep's clothing", () => {

    it('Test_1', () => {
        expect(wolfInSheepsClothingTest(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])).toEqual('Oi! Sheep number 2! You are about to be eaten by a wolf!');
    });

    it('Test_2', () => {
       expect(wolfInSheepsClothingTest(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])).toEqual('Oi! Sheep number 5! You are about to be eaten by a wolf!');
    });

    it('Test_3', () => {
        expect(wolfInSheepsClothingTest(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])).toEqual('Oi! Sheep number 6! You are about to be eaten by a wolf!');
    });

    it('Test_4', () => {
        expect(wolfInSheepsClothingTest(["sheep", "wolf", "sheep"])).toEqual('Oi! Sheep number 1! You are about to be eaten by a wolf!');
    });

    it('Test_5', () => {
        expect(wolfInSheepsClothingTest(["sheep", "sheep", "wolf"])).toEqual('Pls go away and stop eating my sheep');
    });
});

const cakesTest = require('./cakes');
let recipe, available;

describe('Pete, the baker', () => {

    it('Test_1: basic recipes', () => {
        recipe = {flour: 500, sugar: 200, eggs: 1};
        available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
        expect(cakesTest(recipe, available)).toEqual(2);
    });

    it('Test_2: missing ingredient', () => {
        recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
        available = {sugar: 500, flour: 2000, milk: 2000};
        expect(cakesTest(recipe, available)).toEqual(0);
    });

    it('Test_3: not enough ingredients', () => {
        recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
        available = { sugar: 500, flour: 2000, milk: 2000, apples: 15, oil: 20 };
        expect(cakesTest(recipe, available)).toEqual(0);
    });

    it('Test_4: no ingredients available', () => {
        recipe = { eggs: 4, flour: 400 };
        available = {};
        expect(cakesTest(recipe, available)).toEqual(0);
    });

    it('Test_5: exactly enough ingredients for 1 cake', () => {
        recipe = { cream: 1, flour: 3, sugar: 1, milk: 1, oil: 1, eggs: 1 };
        available = { sugar: 1, eggs: 1, flour: 3, cream: 1, oil: 1, milk: 1 };
        expect(cakesTest(recipe, available)).toEqual(1);
    });

    it('Test_6: random tests', () => {
        recipe = { cream: 14, nuts: 19, butter: 0 };
        available = { pears: 5100, cream: 5400, butter: 7200, flour: 2400, chocolate: 6400, eggs: 4100, sugar: 3100,
            crumbles: 5200, oil: 5600, milk: 4800, nuts: 5500, cocoa: 6400, apples: 5900 };
        expect(cakesTest(recipe, available)).toEqual(289);
    });
});
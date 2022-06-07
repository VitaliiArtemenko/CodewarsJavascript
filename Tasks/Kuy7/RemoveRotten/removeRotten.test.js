const removeRottenTest = require('./removeRotten');

describe('Help the Fruit Guy', () => {

    it('Test_1', () => {
        expect(removeRottenTest(null)).toEqual([]);
    })

    it('Test_2', () => {
        expect(removeRottenTest(undefined)).toEqual([]);
    })

    it('Test_3', () => {
        expect(removeRottenTest(["rottenApple","rottenBanana","rottenApple", "rottenPineapple", "rottenKiwi"]))
            .toEqual(["apple","banana","apple","pineapple","kiwi"]);
    })

    it('Test_4', () => {
        expect(removeRottenTest(["apple", "rottenBanana", "rottenApple", "pineapple", "kiwi"]))
            .toEqual(["apple", "banana", "apple", "pineapple", "kiwi"]);
    })

    it('Test_5', () => {
        expect(removeRottenTest([])).toEqual([]);
    })

    it('Test_6', () => {
        expect(removeRottenTest(["tomato", "strawberry", "tomato", "apple", "rottenApple", "kiwi",
            "rottenTomato", "rottenBanana", "mango", "rottenStrawberry", "banana", "rottenBanana", "rottenBanana",
            "rottenStrawberry", "rottenMango"])).toEqual(["tomato", "strawberry", "tomato", "apple", "apple",
            "kiwi", "tomato", "banana", "mango", "strawberry", "banana", "banana", "banana", "strawberry", "mango"]);
    })
})
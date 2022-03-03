const orderFoodTest = require('./orderFood');
const data = require('./data.for.test');



describe('Coding Meetup #14 - Higher-Order Functions Series - Order the food', () => {

    it('Test_1', () => {
        expect(orderFoodTest(data.list1)).toEqual({ vegetarian: 2, standard: 1, vegan: 1 } );
    });

    it('Test_2', () => {
        expect(orderFoodTest(data.list2)).
        toEqual({"diabetic": 1, "gluten-intolerant": 3, "standard": 3, "vegan": 8, "vegetarian": 5 } );
    });

    it('Test_3', () => {
        expect(orderFoodTest(data.list3))
            .toEqual({ "diabetic": 5, "gluten-intolerant": 3, "standard": 5, "vegan": 1, "vegetarian": 6  } );
    });

    it('Test_4', () => {
        expect(orderFoodTest(data.list4))
            .toEqual({ "diabetic": 6, "gluten-intolerant": 5, "standard": 4, "vegan": 2, "vegetarian": 3, } );
    });

    it('Test_5', () => {
        expect(orderFoodTest(data.list5))
            .toEqual({ "diabetic": 4, "gluten-intolerant": 3, "standard": 4, "vegan": 3, "vegetarian": 6, } );
    });
});
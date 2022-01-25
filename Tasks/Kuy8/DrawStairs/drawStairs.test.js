const drawStairsTest = require('./drawStairs');

describe('Draw stairs', () => {

    it('Test_1', () => {
        expect(drawStairsTest(1)).toEqual('I');
    });

    it('Test_2', () => {
        expect(drawStairsTest(3)).toEqual('I\n I\n  I');
    });

    it('Test_3', () => {
       expect(drawStairsTest(5)).toEqual('I\n I\n  I\n   I\n    I');
    });
});
const pyramidTest = require('./pyramid');

describe('Pyramid Array', () => {

    it('Test_1', () => {
        expect(pyramidTest(0)).toEqual([]);
    });

    it('Test_2', () => {
        expect(pyramidTest(1)).toEqual([[1]]);
    });

    it('Test_3', () => {
        expect(pyramidTest(2)).toEqual([[1], [1, 1]]);
    });

    it('Test_4', () => {
        expect(pyramidTest(3)).toEqual([[1], [1, 1], [1, 1, 1]]);
    });

    it('Test_5', () => {
        expect(pyramidTest(14)).toEqual( [ [ 1 ],
            [ 1, 1 ],
            [ 1, 1, 1 ],
            [ 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ]);
    });
});
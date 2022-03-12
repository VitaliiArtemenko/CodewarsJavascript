const ballCollectorTest = require('./ballCollector');

describe('Monkey Tennis - The Aftermath', () => {

    it('Test_1', () => {
        expect(ballCollectorTest([58, 68, 62, 69, 58])).toEqual({ weight: 116 });
    });

    it('Test_2', () => {
        expect(ballCollectorTest([60,66,71,68,62])).toEqual({ weight: 0 });
    });

    it('Test_3', () => {
        expect(ballCollectorTest([58])).toEqual({ weight: 58 });
    });

    it('Test_4', () => {
        expect(ballCollectorTest([58, 58, 58])).toEqual({ weight: 174 });
    });

    it('Test_5', () => {
        expect(ballCollectorTest([8, 18, 28, 38, 48, 58, 68, 78, 158])).toEqual({ weight: 58 });
    });
});
const accumTest = require('./accum');

describe('Mumbling', () => {

    it('Test_1', () => {
        expect(accumTest('abcd')).toEqual('A-Bb-Ccc-Dddd');
    });

    it('Test_2', () => {
        expect(accumTest('RqaEzty')).toEqual('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
    });

    it('Test_3', () => {
        expect(accumTest('cwAt')).toEqual('C-Ww-Aaa-Tttt');
    });

    it('Test_4', () => {
        expect(accumTest('ZpglnRxqenU'))
            .toEqual('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
    });

    it('Test_5', () => {
        expect(accumTest('NyffsGeyylB'))
            .toEqual('N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
    });

    it('Test_6', () => {
        expect(accumTest('MjtkuBovqrU'))
            .toEqual('M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu');
    });

    it('Test_7', () => {
        expect(accumTest('EvidjUnokmM'))
            .toEqual('E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm');
    });

    it('Test_8', () => {
        expect(accumTest('HbideVbxncC'))
            .toEqual('H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc');
    });
});
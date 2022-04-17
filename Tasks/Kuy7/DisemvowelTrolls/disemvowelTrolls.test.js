const disemvowelTrollsTest = require('./disemvowelTrolls');

describe('Disemvowel Trolls', () => {

    it('Test_1', () => {
        expect(disemvowelTrollsTest('This website is for losers LOL!'))
            .toEqual('Ths wbst s fr lsrs LL!');
    });

    it('Test_2', () => {
        expect(disemvowelTrollsTest("No offense but,\\nYour writing is among the worst I've ever read"))
            .toEqual("N ffns bt,\\nYr wrtng s mng th wrst 'v vr rd");
    });

    it('Test_3', () => {
        expect(disemvowelTrollsTest('What are you, a communist?')).toEqual('Wht r y,  cmmnst?');
    });

    it('Test_4', () => {
        expect(disemvowelTrollsTest('NPMRLfkjNWMzlLep')).toEqual('NPMRLfkjNWMzlLp');
    });

    it('Test_5', () => {
        expect(disemvowelTrollsTest("VolgG PbwUsbwBqaEQ IrSCoedceiHPBAkhHYE"))
            .toEqual('VlgG PbwsbwBqQ rSCdcHPBkhHY');
    });
});
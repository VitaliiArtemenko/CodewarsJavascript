const aliasGenTest = require('./aliasGen');


describe('Crash Override', () => {

    it('Test_1', () => {
        expect(aliasGenTest('Larry', 'Brentwood')).toEqual('Logic Bomb');
    });

    it('Test_2', () => {
        expect(aliasGenTest('1Larry', 'Brentwood'))
            .toEqual('Your name must start with a letter from A - Z.');
    });

    it('Test_3', () => {
        expect(aliasGenTest("Mike", "Millington")).toEqual('Malware Mike');
    });

    it('Test_4', () => {
        expect(aliasGenTest("Fahima", "Tash")).toEqual('Function T-Rex');
    });

    it('Test_5', () => {
        expect(aliasGenTest("Daisy", "Pasto")).toEqual('Data Payload');
    });

    it('Test_6', () => {
        expect(aliasGenTest("7393424", "Anumbha"))
            .toEqual('Your name must start with a letter from A - Z.');
    });

    it('Test_7', () => {
        expect(aliasGenTest("Anuddanumbha", "23200"))
            .toEqual('Your name must start with a letter from A - Z.');
    });
});
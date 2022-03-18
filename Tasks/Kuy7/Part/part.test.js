const partTest = require('./part');

describe('Alan Partridge I - Partridge Watch', () => {

    it('Test_1', () => {
        expect(partTest(['Grouse', 'Partridge', 'Pheasant'])).toEqual("Mine's a Pint!");
    });

    it('Test_2', () => {
        expect(partTest(['Pheasant', 'Goose', 'Starling', 'Robin']))
            .toEqual("Lynn, I've pierced my foot on a spike!!");
    });

    it('Test_3', () => {
        expect(partTest(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu',
            'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad',
            'Finger', 'Hamster'])).toEqual("Mine's a Pint!!!!!!!!");
    });

    it('Test_4', () => {
        expect(partTest([ 'Pheasant',  'Starling', 'Thrush', 'Grouse', 'Nomad', 'Finger', 'Pheasant', 'Starling',
            'Nomad', 'BMW', 'Robin', 'Tool', 'Lynn', 'Partridge', 'Toblerone'])).toEqual("Mine's a Pint!!!!!");
    });

    it('Test_5', () => {
        expect(partTest([ 'BMW', 'BMW', 'Emu', 'Starling', 'Square',   'PearTree', 'Lynn', 'Emu', 'Lynn', 'Partridge',
            'Hamster',  'PearTree', 'Pheasant', 'Thrush', 'Nomad' ])).toEqual("Mine's a Pint!!!!!!");
    });
});
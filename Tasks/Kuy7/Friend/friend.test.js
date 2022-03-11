const friendTest = require('./friend');

describe('Friend or Foe?', () => {

    it('Test_1', () => {
        expect(friendTest(["Ryan", "Kieran", "Mark"])).toEqual(["Ryan", "Mark"]);
    });

    it('Test_2', () => {
        expect(friendTest(["Ryan", "Jimmy", "123", "4", "Cool Man"])).toEqual(["Ryan"]);
    });

    it('Test_3', () => {
        expect(friendTest(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
            .toEqual(["Jimm", "Cari", "aret"]);
    });

    it('Test_4', () => {
        expect(friendTest(["Love", "Your", "Face", "1"])).toEqual(["Love", "Your", "Face"]);
    });

    it('Test_5', () => {
        expect(friendTest([ 'Omar',  'Kyle', 'Tim',   'Arnold', 'Ivan',  'Dick', 'Boris', 'Rachel', 'James' ]))
            .toEqual([ 'Omar', 'Kyle', 'Ivan', 'Dick' ]);
    });
});
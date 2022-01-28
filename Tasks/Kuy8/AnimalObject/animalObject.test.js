const animalObjectTest = require('./animalObject');

describe('Training JS #5: Basic data types--Object', () => {

    it('Test_1', () => {
        expect(animalObjectTest({name:"dog",legs:4,color:"white"}))
            .toEqual('This white dog has 4 legs.');
    });

    it('Test_2', () => {
        expect(animalObjectTest({name:"cock",legs:2,color:"red"}))
            .toEqual('This red cock has 2 legs.');
    });

    it('Test_3', () => {
        expect(animalObjectTest({name:"rabbit",legs:4,color:"gray"}))
            .toEqual('This gray rabbit has 4 legs.');
    });

    it('Test_4', () => {
        expect(animalObjectTest({ name: 'mouse', legs: 2, color: 'red' }))
            .toEqual('This red mouse has 2 legs.');
    });

    it('Test_5', () => {
        expect(animalObjectTest({ name: 'bird', legs: 2, color: 'yellow' }))
            .toEqual('This yellow bird has 2 legs.');
    });
});



const stringArrayDuplicatesTest = require('./stringArrayDuplicates')

describe('String array duplicates', () => {

    it('Test_1', () => {
        expect(stringArrayDuplicatesTest(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))
            .toEqual(['codewars','picaniny','hubububo'])
    })

    it('Test_2', () => {
        expect(stringArrayDuplicatesTest(["abracadabra","allottee","assessee"]))
            .toEqual(['abracadabra','alote','asese'])
    })

    it('Test_3', () => {
        expect(stringArrayDuplicatesTest(["kelless","keenness"])).toEqual(['keles','kenes'])
    })

    it('Test_4', () => {
        expect(stringArrayDuplicatesTest(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]))
            .toEqual(['Wolomolo','flodoromonlighters','chuchchi'])
    })

    it('Test_5', () => {
        expect(stringArrayDuplicatesTest(["adanac","soonness","toolless","ppellee"]))
            .toEqual(['adanac','sones','toles','pele'])
    })

    it('Test_6', () => {
        expect(stringArrayDuplicatesTest(["callalloo","feelless","heelless"])).toEqual(['calalo','feles','heles'])
    })

    it('Test_7', () => {
        expect(stringArrayDuplicatesTest(["putteellinen","keenness"])).toEqual(['putelinen','kenes'])
    })

    it('Test_8', () => {
        expect(stringArrayDuplicatesTest(["kelless","voorraaddoosspullen","achcha"]))
            .toEqual(['keles','voradospulen','achcha'])
    })
})
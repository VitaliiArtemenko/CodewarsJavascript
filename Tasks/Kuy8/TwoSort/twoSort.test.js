const twoSortTest = require('./twoSort');

describe('Sort and Star', () => {

    it('Test_1', () => {
        expect(twoSortTest(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
            .toEqual('b***i***t***c***o***i***n');
    })

    it('Test_2', () => {
        expect(twoSortTest(["turns", "out", "random", "test", "cases", "are", "easier",
            "than", "writing", "out", "basic", "ones"])).toEqual('a***r***e');
    })

    it('Test_3', () => {
        expect(twoSortTest([ 'DarkCoin', 'Ethereum', 'ProofOfWork', 'Steem', 'LiteCoin' ]))
            .toEqual('D***a***r***k***C***o***i***n');
    })

    it('Test_4', () => {
        expect(twoSortTest([ 'lets', 'talk', 'about', 'javascript', 'the', 'best', 'language' ]))
            .toEqual('a***b***o***u***t');
    })

    it('Test_5', () => {
        expect(twoSortTest( ['i', 'want', 'to', 'travel', 'the', 'world', 'writing', 'code', 'one','day']))
            .toEqual('c***o***d***e');
    })

    it('Test_6', () => {
        expect(twoSortTest( ['i']))
            .toEqual('i');
    })
})
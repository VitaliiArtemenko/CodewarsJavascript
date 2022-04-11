const longestConsecTest = require('./longestConsec');

describe('Consecutive strings', () => {

    it('Test_1', () => {
        expect(longestConsecTest(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
            .toEqual('abigailtheta');
    });

    it('Test_2', () => {
        expect(longestConsecTest(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb",
            "oocccffuucccjjjkkkjyyyeehh"], 1)).toEqual('oocccffuucccjjjkkkjyyyeehh');
    });

    it('Test_3', () => {
        expect(longestConsecTest([], 3)).toEqual('');
    });

    it('Test_4', () => {
        expect(longestConsecTest(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv",
            "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))
            .toEqual('wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck');
    });

    it('Test_5', () => {
        expect(longestConsecTest(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2))
            .toEqual('wlwsasphmxxowiaxujylentrklctozmymu');
    });

    it('Test_6', () => {
        expect(longestConsecTest(["zone", "abigail", "theta", "form", "libe", "zas"], -2)).toEqual('');
    });

    it('Test_7', () => {
        expect(longestConsecTest(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))
            .toEqual('ixoyx3452zzzzzzzzzzzz');
    });

    it('Test_8', () => {
        expect(longestConsecTest(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)).toEqual('');
    });

    it('Test_9', () => {
        expect(longestConsecTest(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)).toEqual('');
    });
});
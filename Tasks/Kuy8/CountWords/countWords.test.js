const countWordsTest = require('./countWords');

describe('Count words', () => {

    it("Test_1", () => {
        expect(countWordsTest('Hello')).toEqual(1);
    });

    it("Test_2", () => {
        expect(countWordsTest('Hello, World!')).toEqual(2);
    });

    it("Test_3", () => {
        expect(countWordsTest('Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'))
            .toEqual(19);
    });

    it("Test_4", () => {
        expect(countWordsTest('')).toEqual(0);
    });

    it("Test_5", () => {
        expect(countWordsTest('With! Symbol@ #Around! (Every) %Word$')).toEqual(5);
    });

    it("Test_6", () => {
        expect(countWordsTest('Dear   Victoria, I love  to press   space button.')).toEqual(8);
    });

    it("Test_7", () => {
        expect(countWordsTest(' Arthur ')).toEqual(1);
    });

    it("Test_8", () => {
        expect(countWordsTest(' David')).toEqual(1);
    });

    it("Test_9", () => {
        expect(countWordsTest('Nelson ')).toEqual(1);
    });

    it("Test_10", () => {
        expect(countWordsTest('  Hello Gomer  ')).toEqual(2);
    });

    it("Test_11", () => {
        expect(countWordsTest('  Hello     Bart  ')).toEqual(2);
    });

    it("Test_12", () => {
        expect(countWordsTest('7n8cs')).toEqual(1);
    });

    it("Test_13", () => {
        expect(countWordsTest('Hello﻿World')).toEqual(2);
    });

    it("Test_14", () => {
        expect(countWordsTest('﻿Hello﻿World ')).toEqual(2);
    });
});
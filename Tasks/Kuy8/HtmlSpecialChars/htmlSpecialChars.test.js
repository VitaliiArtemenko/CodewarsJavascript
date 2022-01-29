const htmlSpecialCharsTest = require('./htmlSpecialChars');

describe('Safen User Input Part I - htmlspecialchars', () => {

    it('Test_1', () => {
        expect(htmlSpecialCharsTest('<h2>Hello World</h2>'))
            .toEqual('&lt;h2&gt;Hello World&lt;/h2&gt;');
    });

    it('Test_2', () => {
        expect(htmlSpecialCharsTest('Hello, how would you & I fare?'))
            .toEqual('Hello, how would you &amp; I fare?');
    });

    it('Test_3', () => {
        expect(htmlSpecialCharsTest('How was "The Matrix"?  Did you like it?'))
            .toEqual('How was &quot;The Matrix&quot;?  Did you like it?');
    });

    it('Test_4', () => {
        expect(htmlSpecialCharsTest('<script>alert(\'Website Hacked!\');</script>'))
            .toEqual('&lt;script&gt;alert(\'Website Hacked!\');&lt;/script&gt;');
    });
});
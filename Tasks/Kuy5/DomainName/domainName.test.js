const domainNameTest = require('./domainName');

describe('Extract the domain name from a URL', () => {

    it('Test_1', () => {
        expect(domainNameTest('http://github.com/carbonfive/raygun')).toEqual('github');
    });

    it('Test_2', () => {
        expect(domainNameTest('http://www.zombie-bites.com')).toEqual('zombie-bites');
    });

    it('Test_3', () => {
        expect(domainNameTest('https://www.cnet.com')).toEqual('cnet');
    });

    it('Test_4', () => {
        expect(domainNameTest('http://google.com')).toEqual('google');
    });

    it('Test_5', () => {
        expect(domainNameTest('http://google.co.jp')).toEqual('google');
    });

    it('Test_6', () => {
        expect(domainNameTest('www.xakep.ru')).toEqual('xakep');
    });

    it('Test_7', () => {
        expect(domainNameTest('https://youtube.com')).toEqual('youtube');
    });

    it('Test_8', () => {
        expect(domainNameTest('5h1yj3jgy3g02xwe6we0qm58l9w.co.uk')).toEqual('5h1yj3jgy3g02xwe6we0qm58l9w');
    });

    it('Test_9', () => {
        expect(domainNameTest('https://www.9x0kqm7atmq40ihrx7odlu-vy3.org/'))
            .toEqual('9x0kqm7atmq40ihrx7odlu-vy3');
    });

    it('Test_10', () => {
        expect(domainNameTest('http://www.1r0ig.tv')).toEqual('1r0ig');
    });

    it('Test_11', () => {
        expect(domainNameTest('zszag.name')).toEqual('zszag');
    });
});
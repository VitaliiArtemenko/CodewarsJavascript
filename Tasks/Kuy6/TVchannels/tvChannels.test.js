const tvChannelsTest = require('./tvChannels');

describe('TV channels', () => {

    it('Test_1', () => {
        expect(tvChannelsTest(["BBC1","BBC2","MTV"])).toEqual({'0': 'BBC1','1': 'BBC2','2': 'MTV'});
    });

    it('Test_2', () => {
        expect(tvChannelsTest(["BBC1","BBC1","BBC2","MTV"])).toEqual({'0': 'BBC1','1': 'BBC2','2': 'MTV'});
    });

    it('Test_3', () => {
        expect(tvChannelsTest([ '4Music', 'National Geographic', 'CNBC', 'Film 5', 'Film 4', '4Music', 'MTV' ]))
            .toEqual({ '0': '4Music', '1': 'CNBC', '2': 'Film 4', '3': 'Film 5', '4': 'MTV',
                '5': 'National Geographic' });
    });

    it('Test_4', () => {
        expect(tvChannelsTest([ 'Film 5',
            'CNBC',
            'National Geographic',
            'Film 5',
            'CNBC',
            'Food Network',
            'Film 5',
            'Channel 4',
            'National Geographic',
            'Discovery',
            'National Geographic',
            'BBC1',
            'Food Network',
            'CNBC',
            'BBC2',
            'ITV',
            'Discovery',
            'MTV',
            'Drama',
            'SyFy' ])).toEqual({ '0': 'BBC1',
            '1': 'BBC2',
            '2': 'CNBC',
            '3': 'Channel 4',
            '4': 'Discovery',
            '5': 'Drama',
            '6': 'Film 5',
            '7': 'Food Network',
            '8': 'ITV',
            '9': 'MTV',
            '10': 'National Geographic',
            '11': 'SyFy' });
    });

    it('Test_5', () => {
        expect(tvChannelsTest([ 'CNBC',
            'Sky Sport',
            '4Music',
            'SyFy',
            'BBC1',
            'Discovery',
            'CNBC',
            'National Geographic',
            'Food Network',
            'Channel 5',
            'Sky Sport',
            'Film 5',
            'Film 5',
            'Channel 4',
            'BBC Sport',
            'CNN',
            'Channel 4',
            'Drama' ])).toEqual({ '0': '4Music',
            '1': 'BBC Sport',
            '2': 'BBC1',
            '3': 'CNBC',
            '4': 'CNN',
            '5': 'Channel 4',
            '6': 'Channel 5',
            '7': 'Discovery',
            '8': 'Drama',
            '9': 'Film 5',
            '10': 'Food Network',
            '11': 'National Geographic',
            '12': 'Sky Sport',
            '13': 'SyFy' });
    });
})
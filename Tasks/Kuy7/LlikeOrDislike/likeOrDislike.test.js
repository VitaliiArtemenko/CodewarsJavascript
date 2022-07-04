const likeOrDislikeTest = require('./likeOrDislike');

describe('Likes Vs Dislikes', () => {

    it('Test_1', () => {
        expect(likeOrDislikeTest(['Dislike'])).toEqual('Dislike');
    })

    it('Test_2', () => {
        expect(likeOrDislikeTest(['Like', 'Like'])).toEqual('Nothing');
    })

    it('Test_3', () => {
        expect(likeOrDislikeTest(['Dislike','Like'])).toEqual('Like');
    })

    it('Test_4', () => {
        expect(likeOrDislikeTest(['Like','Dislike','Dislike'])).toEqual('Nothing');
    })

    it('Test_5', () => {
        expect(likeOrDislikeTest(['Dislike','Dislike'])).toEqual('Nothing');
    })

    it('Test_6', () => {
        expect(likeOrDislikeTest(['Like','Like','Like'])).toEqual('Like');
    })

    it('Test_7', () => {
        expect(likeOrDislikeTest(['Like','Dislike'])).toEqual('Dislike');
    })

    it('Test_8', () => {
        expect(likeOrDislikeTest(['Dislike','Like','Dislike'])).toEqual('Dislike');
    })

    it('Test_9', () => {
        expect(likeOrDislikeTest(['Like','Like','Dislike','Like','Like','Like','Like','Dislike']))
            .toEqual('Dislike');
    })

    it('Test_10', () => {
        expect(likeOrDislikeTest([])).toEqual('Nothing');
    })
})
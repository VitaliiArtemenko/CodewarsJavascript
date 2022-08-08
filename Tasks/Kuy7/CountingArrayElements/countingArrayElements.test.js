const countingArrayElementsTest = require('./countingArrayElements')

describe('Counting Array Elements', () => {

    it('Test_1', () => {
        expect(countingArrayElementsTest(['a', 'a', 'b', 'b', 'b'])).toEqual({ 'a': 2, 'b': 3 })
    })

    it('Test_2', () => {
        expect(countingArrayElementsTest([ 'Saotome-agase', 'Ryoma Nagare', 'Benkei Kurama', 'Michiru Saotome',
            'Benkei Kurama', 'Musashi Tomoe', 'Michiru Saotome', 'Ryoma Nagare', 'Ryoma Nagare', 'Hayato Jin',
            'Michiru Saotome', 'Musashi Tomoe', 'Musashi Tomoe', 'Ryoma Nagare', 'Ryoma Nagare', 'Benkei Kurama',
            'Hayato Jin', 'Saotome-agase' ])).toEqual({ "Benkei Kurama": 3, "Hayato Jin": 2,
                "Michiru Saotome": 3, "Musashi Tomoe": 3, "Ryoma Nagare": 5, "Saotome-agase": 2})
    })

    it('Test_3', () => {
        expect(countingArrayElementsTest([])).toEqual({})
    })

    it('Test_4', () => {
        expect(countingArrayElementsTest([ 'Hayato Jin', 'Saotome-agase', 'Ryoma Nagare', 'Benkei Kurama',
            'Hayato Jin' ])).toEqual({ "Benkei Kurama": 1, "Hayato Jin": 2, "Ryoma Nagare": 1,
                "Saotome-agase": 1})
    })

    it('Test_5', () => {
        expect(countingArrayElementsTest([ 'Michiru Saotome', 'Hayato Jin', 'Benkei Kurama', 'Hayato Jin',
            'Ryoma Nagare', 'Ryoma Nagare', 'Musashi Tomoe', 'Benkei Kurama', 'Hayato Jin', 'Saotome-agase',
            'Saotome-agase', 'Musashi Tomoe' ])).toEqual({ "Benkei Kurama": 2, "Hayato Jin": 3,
                "Michiru Saotome": 1, "Musashi Tomoe": 2, "Ryoma Nagare": 2, "Saotome-agase": 2})
    })
})
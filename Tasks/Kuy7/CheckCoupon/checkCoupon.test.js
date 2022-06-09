const checkCouponTest = require('./checkCoupon');

describe('The Coupon Code', () => {

    it('Test_1', () => {
        expect(checkCouponTest('123','123',
            'September 5, 2014','October 1, 2014')).toEqual(true);
    })

    it('Test_2', () => {
        expect(checkCouponTest('123a','123',
            'September 5, 2014','October 1, 2014')).toEqual(false);
    })

    it('Test_3', () => {
        expect(checkCouponTest('0', false,
            'September 5, 2014', 'September 25, 2014')).toEqual(false);
    })

    it('Test_4', () => {
        expect(checkCouponTest('2', '2',
            'September 5, 2014', 'September 25, 2014')).toEqual(true);
    })

    it('Test_5', () => {
        expect(checkCouponTest('blo4r04on09', 'blo4r04on09',
            'May 9, 2012', 'November 12, 2000')).toEqual(false);
    })
})
const arrayToCsvTest = require('./arrayToCsv');

describe('CSV representation of array', () => {

   it('Test_1', () => {
       expect(arrayToCsvTest([
           [ 0, 1, 2, 3, 45 ],
           [ 10,11,12,13,14 ],
           [ 20,21,22,23,24 ],
           [ 30,31,32,33,34 ]
       ] )).toEqual('0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');
   });

   it('Test_2', () => {
       expect(arrayToCsvTest([
           [ -25, 21, 2, -33, 48 ],
           [ 30,31,-32,33,-34 ]
       ] )).toEqual('-25,21,2,-33,48\n30,31,-32,33,-34');
   });

   it('Test_3', () => {
       expect(arrayToCsvTest([
           [ 5,55,5,5,55 ],
           [ 6,6,66,23,24 ],
           [ 666,31,66,33,7 ]
       ])).toEqual('5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');
   });
});
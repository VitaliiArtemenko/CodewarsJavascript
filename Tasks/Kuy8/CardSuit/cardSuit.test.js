const cardSuitTest = require('./cardSuit');

describe('Define a card suit', () => {

   it('Test_1', () => {
      expect(cardSuitTest('7♣')).toEqual('clubs');
   });

   it("Test_2", () => {
      expect(cardSuitTest('10♠')).toEqual('spades');
   });

   it('Test_3', () => {
      expect(cardSuitTest('Q♥')).toEqual('hearts');
   });

   it('Test_4', () => {
      expect(cardSuitTest('A♦')).toEqual('diamonds');
   });
});
const CalculatorDisplay = require('../components/CalculatorDisplay');

describe('Calculator test', () => {
  test('adding 1 + 2 should return 3', () => {
    expect(CalculatorDisplay.sumValue(1, 2)).toBe(3);
  });
});

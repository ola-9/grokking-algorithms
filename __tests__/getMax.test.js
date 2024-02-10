import getMax from '../src/30-recursion/getMax';

test('test getMax', () => {
  expect(getMax([2, 4, 6])).toBe(6);
  // expect(getMax([])).toBe(0);
  expect(getMax([-2, -4, -6])).toBe(-2);
  expect(getMax([5])).toBe(5);
  expect(getMax([-1, 2, -3, 4, -5])).toBe(4);
});

import sum from '../src/30-recursion/sum';

test('test sum', () => {
  expect(sum([2, 4, 6])).toBe(12);
  expect(sum([])).toBe(0);
  expect(sum([-2, -4, -6])).toBe(-12);
  expect(sum([5])).toBe(5);
  expect(sum([-1, 2, -3, 4, -5])).toBe(-3);
});

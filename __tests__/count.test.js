import count from '../src/30-recursion/count';

test('test count', () => {
  expect(count([2, 4, 6])).toBe(3);
  expect(count([])).toBe(0);
  expect(count([-2, -4, -6])).toBe(3);
  expect(count([5])).toBe(1);
  expect(count([-1, 2, -3, 4, -5])).toBe(5);
});

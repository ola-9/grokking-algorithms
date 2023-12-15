import binarySearch from '../src/10-intro/binary-search';

test('test binary search', () => {
  expect(binarySearch([1, 3, 5, 7, 9], 3)).toBe(1);
  expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(null);
  expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
  expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  expect(binarySearch([], 5)).toBe(null);
  expect(binarySearch([6], 6)).toBe(0);
});

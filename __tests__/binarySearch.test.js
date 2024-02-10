import binarySearch from '../src/10-binary-search/binary-search';
import binarySearchR from '../src/10-binary-search/binary-r-search';

test('test binary search', () => {
  expect(binarySearch([1, 3, 5, 7, 9], 3)).toBe(1);
  expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(null);
  expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
  expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  expect(binarySearch([], 5)).toBe(null);
  expect(binarySearch([6], 6)).toBe(0);
  expect(binarySearch([1, 2, 2, 2, 3, 4, 5, 6], 2)).toBe(3); // find last vs range
});

test('test binary recursive search', () => {
  expect(binarySearchR([1, 3, 5, 7, 9], 3)).toBe(1);
  expect(binarySearchR([1, 3, 5, 7, 9], 4)).toBe(null);
  expect(binarySearchR([1, 3, 5, 7, 9], 1)).toBe(0);
  expect(binarySearchR([1, 3, 5, 7, 9], 9)).toBe(4);
  expect(binarySearchR([1, 3, 5, 7, 9], 25)).toBe(null);
  expect(binarySearchR([], 5)).toBe(null);
  expect(binarySearchR([6], 6)).toBe(0);
});

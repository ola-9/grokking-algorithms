import binarySearchRange from '../src/10-binary-search/binarySearchRange';

test('binary search range', () => {
  expect(binarySearchRange([1, 2, 2, 2, 3, 4, 5, 6], 2)).toStrictEqual([1, 3]);
});

import mergeArray from '../src/45-merge-sort/mergeSort';

test('quick sort', () => {
  expect(mergeArray([5, 3, 6, 2, 10])).toStrictEqual([2, 3, 5, 6, 10]);
  expect(mergeArray([])).toStrictEqual([]);
  expect(mergeArray([1])).toStrictEqual([1]);
  expect(mergeArray([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(mergeArray([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(mergeArray([5, 3, 6, 2, 5])).toStrictEqual([2, 3, 5, 5, 6]);
});

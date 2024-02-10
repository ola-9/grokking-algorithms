import insertionSort from '../src/17-insertion-sort/insertion-sort';

test('insertion sort', () => {
  expect(insertionSort([5, 3, 6, 2, 10])).toStrictEqual([2, 3, 5, 6, 10]);
  expect(insertionSort([])).toStrictEqual([]);
  expect(insertionSort([1])).toStrictEqual([1]);
  expect(insertionSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(insertionSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(insertionSort([5, 3, 6, 2, 5])).toStrictEqual([2, 3, 5, 5, 6]);
});

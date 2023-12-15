import selectionSort from '../src/20-selection-sort/selection-sort';

test('selection sort', () => {
  expect(selectionSort([5, 3, 6, 2, 10])).toStrictEqual([2, 3, 5, 6, 10]);
  expect(selectionSort([])).toStrictEqual([]);
  expect(selectionSort([1])).toStrictEqual([1]);
  expect(selectionSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(selectionSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(selectionSort([5, 3, 6, 2, 5])).toStrictEqual([2, 3, 5, 5, 6]);
});

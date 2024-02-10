import quickSort from '../src/40-quick-sort/quickSort-easy';

test('quick sort', () => {
  expect(quickSort([5, 3, 6, 2, 10])).toStrictEqual([2, 3, 5, 6, 10]);
  expect(quickSort([])).toStrictEqual([]);
  expect(quickSort([1])).toStrictEqual([1]);
  expect(quickSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(quickSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(quickSort([5, 3, 6, 2, 5])).toStrictEqual([2, 3, 5, 5, 6]);
});

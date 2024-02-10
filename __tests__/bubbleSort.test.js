import bubbleSort from '../src/15-bubble-sort/bubbleSort';

test('bubble sort', () => {
  expect(bubbleSort([5, 3, 6, 2, 10])).toStrictEqual([2, 3, 5, 6, 10]);
  expect(bubbleSort([])).toStrictEqual([]);
  expect(bubbleSort([1])).toStrictEqual([1]);
  expect(bubbleSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(bubbleSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(bubbleSort([5, 3, 6, 2, 5])).toStrictEqual([2, 3, 5, 5, 6]);
});

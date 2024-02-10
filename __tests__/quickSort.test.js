import quickSortFirst from '../src/40-quick-sort/quickSort-first';
import quickSortLast from '../src/40-quick-sort/quickSort-last';
import quickSortMiddle from '../src/40-quick-sort/quickSort-middle';
import quickSortRandom from '../src/40-quick-sort/quickSort-random';
import tailRecursiveQuickSort from '../src/40-quick-sort/quickSort-tail';

let arr1;
let arr2;
let arr3;
let arr4;
let arr5;

beforeEach(() => {
  arr1 = [5, 3, 6, 2, 10];
  arr2 = [1, 2, 3, 4, 5];
  arr3 = [5, 4, 3, 2, 1];
  arr4 = [5, 3, 6, 2, 5];
  arr5 = [1];
});

test('quick sort - first element pivot', () => {
  quickSortFirst(arr1, 0, arr1.length - 1);
  expect(arr1).toEqual([2, 3, 5, 6, 10]);

  quickSortFirst(arr2, 0, arr2.length - 1);
  expect(arr2).toEqual([1, 2, 3, 4, 5]);

  quickSortFirst(arr3, 0, arr3.length - 1);
  expect(arr3).toEqual([1, 2, 3, 4, 5]);

  quickSortFirst(arr4, 0, arr4.length - 1);
  expect(arr4).toEqual([2, 3, 5, 5, 6]);

  quickSortFirst([1], 0, 1);
  expect(arr5).toEqual([1]);
});

test('quick sort - last element pivot', () => {
  quickSortLast(arr1, 0, arr1.length - 1);
  expect(arr1).toEqual([2, 3, 5, 6, 10]);

  quickSortLast(arr2, 0, arr2.length - 1);
  expect(arr2).toEqual([1, 2, 3, 4, 5]);

  quickSortLast(arr3, 0, arr3.length - 1);
  expect(arr3).toEqual([1, 2, 3, 4, 5]);

  quickSortLast(arr4, 0, arr4.length - 1);
  expect(arr4).toEqual([2, 3, 5, 5, 6]);

  quickSortLast([1], 0, 1);
  expect(arr5).toEqual([1]);
});

test('quick sort - middle element pivot', () => {
  quickSortMiddle(arr1, 0, arr1.length - 1);
  expect(arr1).toEqual([2, 3, 5, 6, 10]);

  quickSortMiddle(arr2, 0, arr2.length - 1);
  expect(arr2).toEqual([1, 2, 3, 4, 5]);

  quickSortMiddle(arr3, 0, arr3.length - 1);
  expect(arr3).toEqual([1, 2, 3, 4, 5]);

  quickSortMiddle(arr4, 0, arr4.length - 1);
  expect(arr4).toEqual([2, 3, 5, 5, 6]);

  quickSortMiddle([1], 0, 1);
  expect(arr5).toEqual([1]);
});

test('quick sort - random element pivot', () => {
  quickSortRandom(arr1, 0, arr1.length - 1);
  expect(arr1).toEqual([2, 3, 5, 6, 10]);

  quickSortRandom(arr2, 0, arr2.length - 1);
  expect(arr2).toEqual([1, 2, 3, 4, 5]);

  quickSortRandom(arr3, 0, arr3.length - 1);
  expect(arr3).toEqual([1, 2, 3, 4, 5]);

  quickSortRandom(arr4, 0, arr4.length - 1);
  expect(arr4).toEqual([2, 3, 5, 5, 6]);

  quickSortRandom([1], 0, 1);
  expect(arr5).toEqual([1]);
});

test('quick sort - tail element pivot', () => {
  tailRecursiveQuickSort(arr1, 0, arr1.length - 1);
  expect(arr1).toEqual([2, 3, 5, 6, 10]);

  tailRecursiveQuickSort(arr2, 0, arr2.length - 1);
  expect(arr2).toEqual([1, 2, 3, 4, 5]);

  tailRecursiveQuickSort(arr3, 0, arr3.length - 1);
  expect(arr3).toEqual([1, 2, 3, 4, 5]);

  tailRecursiveQuickSort(arr4, 0, arr4.length - 1);
  expect(arr4).toEqual([2, 3, 5, 5, 6]);

  tailRecursiveQuickSort([1], 0, 1);
  expect(arr5).toEqual([1]);
});

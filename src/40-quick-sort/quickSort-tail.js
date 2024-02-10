/* eslint-disable no-param-reassign */
import swap from './swap';

const partitionHigh = (arr, low, high) => {
  // Pick the first element as pivot
  const pivot = arr[high];
  let i = low;

  // Partition the array into two parts using the pivot
  for (let j = low; j < high; j += 1) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i += 1;
    }
  }

  swap(arr, i, high);

  // Return the pivot index
  return i;
};

const tailRecursiveQuickSort = (arr, low, high) => {
  while (low < high) {
    const PI = partitionHigh(arr, low, high);

    // recur on smaller sub-array
    if (PI - low < high - PI) {
      tailRecursiveQuickSort(arr, low, PI - 1);
      low = PI + 1;
    } else {
      tailRecursiveQuickSort(arr, PI + 1, high);
      high = PI - 1;
    }
  }
};

export default tailRecursiveQuickSort;

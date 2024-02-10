import swap from './swap';

const partitionMiddle = (arr, low, high) => {
  // Get the mid index
  const mid = Math.floor((low + high) / 2);
  // Swap the mid element with first element
  swap(arr, mid, low);

  // Now use the first element as pivot
  const pivot = arr[low];
  let lo = low + 1;
  let hi = high;

  // Partition the array based on the pivot
  while (lo <= hi) {
    // Move towards each other
    while (arr[hi] > pivot) {
      hi -= 1;
    }

    while (lo <= hi && arr[lo] <= pivot) {
      lo += 1;
    }

    // When inversion found swap the elements
    if (lo <= hi) {
      swap(arr, lo, hi);
      lo += 1;
      hi -= 1;
    }
  }

  swap(arr, low, hi);

  // Return the pivot index
  return hi;
};

const quickSort = (arr, low, high) => {
  // base condition
  if (low >= high) {
    return;
  }

  // rearrange the elements across pivot
  const pivot = partitionMiddle(arr, low, high);

  // recur on sub-array containing elements less than pivot
  quickSort(arr, low, pivot - 1);

  // recur on sub-array containing elements more than pivot
  quickSort(arr, pivot + 1, high);
};

export default quickSort;

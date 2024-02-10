import swap from './swap';

const partitionLow = (arr, low, high) => {
  // Pick the first element as pivot
  const pivot = arr[low];
  let i = low;

  // Partition the array into two parts using the pivot
  for (let j = low; j <= high; j += 1) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i += 1;
    }
  }

  swap(arr, i - 1, low);

  // Return the pivot index
  return i - 1;
};

const partitionRandom = (arr, low, high) => {
  // Get random number between the given indexes.
  const random = Math.floor(Math.random() * (high - low + 1) + low);

  // Swap with the first element
  swap(arr, random, low);

  // Use first element as a pivot
  return partitionLow(arr, low, high);
};

const quickSort = (arr, low, high) => {
  // base condition
  if (low >= high) {
    return;
  }

  // rearrange the elements across pivot
  const pivot = partitionRandom(arr, low, high);

  // recur on sub-array containing elements less than pivot
  quickSort(arr, low, pivot - 1);

  // recur on sub-array containing elements more than pivot
  quickSort(arr, pivot + 1, high);
};

export default quickSort;

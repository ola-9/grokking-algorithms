const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const less = arr.filter((item) => item < pivot);
  const greater = arr.filter((item) => item > pivot);
  const equal = arr.filter((item) => item === pivot);
  const result = [...quickSort(less), ...equal, ...quickSort(greater)];
  return result;
};

export default quickSort;

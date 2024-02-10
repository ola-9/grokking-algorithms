const binarySearch = (arr, item) => {
  const iter = (low, high) => {
    if (low > high) {
      return null;
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === item) {
      return mid;
    }

    if (arr[mid] > item) {
      return iter(low, mid - 1);
    }

    return iter(mid + 1, high);
  };

  return iter(0, arr.length - 1);
};

export default binarySearch;

const binarySearch = (coll, item) => {
  let low = 0;
  let high = coll.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = coll[mid];

    if (guess === item) {
      return mid;
    } if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

// const res = binarySearch([1, 2, 2, 2, 3, 4, 5, 6], 2);
// console.log(res);

export default binarySearch;

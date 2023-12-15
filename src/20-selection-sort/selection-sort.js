/* eslint-disable no-param-reassign */
const selectionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < len; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
};

export default selectionSort;

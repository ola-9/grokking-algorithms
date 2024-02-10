/* eslint-disable no-param-reassign */

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    const current = arr[i];
    let j = i - 1;

    // compare and shift elements in the sorted part
    while (j >= 0 && arr[j] > current) { // ascending
      arr[j + 1] = arr[j]; // Shift previous to the right
      j -= 1;
    }

    arr[j + 1] = current; // insert current
  }

  return arr;
};

export default insertionSort;

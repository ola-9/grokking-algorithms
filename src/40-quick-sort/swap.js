/* eslint-disable no-param-reassign */
const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

export default swap;

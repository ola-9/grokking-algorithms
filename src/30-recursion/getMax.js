const getMax = (arr) => {
  const iter = (index, max) => {
    if (index >= arr.length) {
      return max;
    }
    if (arr[index] > max) {
      return iter(index + 1, arr[index]);
    }
    return iter(index + 1, max);
  };

  return iter(1, arr[0]);
};

export default getMax;

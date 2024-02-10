const sum = (arr) => {
  const iter = (index) => {
    if (index >= arr.length) {
      return 0;
    }
    return arr[index] + iter(index + 1);
  };
  return iter(0);
};

export default sum;

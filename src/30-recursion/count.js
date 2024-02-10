const count = (arr) => {
  const iter = (index) => {
    if (index >= arr.length) {
      return 0;
    }
    return 1 + iter(index + 1);
  };
  return iter(0);
};

export default count;

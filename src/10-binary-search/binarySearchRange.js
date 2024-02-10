function binarySearchRange(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let start = -1;
  let end = -1;

  // Поиск левой границы диапазона
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      start = mid;
      right = mid - 1; // Ищем дальше в левой части
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  left = 0;
  right = arr.length - 1;

  // Поиск правой границы диапазона
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      end = mid;
      left = mid + 1; // Ищем дальше в правой части
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [start, end];
}

export default binarySearchRange;

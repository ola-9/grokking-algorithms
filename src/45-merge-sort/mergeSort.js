/**
 * https://leetcode.com/problems/sort-an-array/
 * Merge Sort
 * Time O(n*log(n)) | Space O(n)
 * @param {number[]} nums
 * @return {number[]}
 */

const merge = (arr1, arr2) => {
  const merged = [];
  let p1 = 0; let
    p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      merged.push(arr1[p1]);
      p1 += 1;
    } else {
      merged.push(arr2[p2]);
      p2 += 1;
    }
  }

  while (p1 < arr1.length) {
    merged.push(arr1[p1]);
    p1 += 1;
  }

  while (p2 < arr2.length) {
    merged.push(arr2[p2]);
    p2 += 1;
  }

  return merged;
};

const mergeSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  return merge(left, right);
};

export default mergeSort;

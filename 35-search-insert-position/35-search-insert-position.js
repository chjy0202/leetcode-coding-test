/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  
  if (target > nums[end]) {
      return nums.length;
  } else if (target < nums[start]) {
      return 0;
  } else if (nums.includes(target)) {
      return nums.indexOf(target);
  }
  
  while(end - start > 1) {
      if (target < nums[mid]) {
        end = mid;
        mid = Math.floor((start + end) / 2);
      } else {
        start = mid;
          mid = Math.floor((start + end) / 2);
      }
  }
  return start + 1;
};
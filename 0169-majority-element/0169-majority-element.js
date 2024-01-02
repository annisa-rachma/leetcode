/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = {};
  for (let num of nums) {
    if (!count[num]) {
      count[num] = 0;
    }
    count[num]++;
  }

  let majority = 0;
  let result;
  for (key in count) {
    if (count[key] > majority) {
      majority = count[key];
      result = key;
    }
  }
  return result;
};
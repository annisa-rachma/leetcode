/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}
    for(let i=0; i<nums.length; i++) {
      //if there's no current number on obj, then add current number to obj, and assign it with 0 count
      if(!obj[nums[i]]) {
          obj[nums[i]] = 0
      }
      //if the current number already on obj, then add the count
      obj[nums[i]]++
    }
    //variable to contain the numbers which appears once
    let res
    //looping to find which number appears once
    for(let key in obj) {
        if(obj[key] != 3) {
            res = key
        }
    }
    return Number(res)
};
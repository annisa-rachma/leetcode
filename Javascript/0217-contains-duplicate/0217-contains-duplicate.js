/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //sort array
    nums = nums.sort()
    for(let i=0; i<nums.length; i++) {
        //checking current num with the next to find wheter it is duplicating or not
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
};
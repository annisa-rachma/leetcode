/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //find whether it's target in the array, if it's, return it
    if(nums.indexOf(target) !== -1) return nums.indexOf(target)
    //find the nearest number, push into temporary array, the length of it's array is the index of target
    let temp = [] 
    for(let i=0; i<nums.length; i++) {
        if(nums[i] < target) {
            temp.push(nums[i])
        }
    } 
    return temp.length
};
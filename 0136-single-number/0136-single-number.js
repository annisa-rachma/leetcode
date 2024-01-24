/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //create a temp array
    let temp = []
    //iterate through array
    for(let i=0; i<nums.length; i++) {
        //find whether the temp array already has the same num or not, if it hasn't, push the num to temp arr
        if(temp.indexOf(nums[i]) == -1) {
            temp.push(nums[i])
        } else {
            //filtering the temp arr from the same num
            temp = temp.filter((num) => num != nums[i])
        }
    }
    return temp[0]
};

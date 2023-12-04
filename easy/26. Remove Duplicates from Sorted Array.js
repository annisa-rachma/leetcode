/**
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/*
var removeDuplicates = function(nums) {
  let temp = []
  let totalDuplicate = 0
  let count = 0
  for(let i=nums.length-1; i>=0; i--) {
    if(temp.includes(nums[i])) {
      nums.splice(i, 1)
      totalDuplicate++
    } else {
      temp.push(nums[i])
      count++
    }
  }
  for(let i=0; i<totalDuplicate; i++) {
    nums.push('_')
  }
  return count
};
*/

// using two pointer
var removeDuplicates = function(nums) {
  let i = 0
  for(let j=1; j<nums.length ; j++) {
    // Compare the element at position i with the element at position j
    if(nums[i] !== nums[j]) {
      // If they are not equal, it means a new unique element is found
      // Increment i to the next position for a unique element
      i++

      // Update the element at position i with the new unique element found at position j
      nums[i] = nums[j]
    }
  }
  // return the length of the modified array, which is i + 1
  return i+1
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
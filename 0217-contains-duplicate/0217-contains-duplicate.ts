function containsDuplicate(nums: number[]): boolean {
    //create a new set, because set value is unique
    let temp = new Set<number>()

    //iterate nums, check wether the temp has the current value or not
    //if not, then add the current value to the set
    //if it is, return true, because there's duplicate
    for(let i=0; i<nums.length; i++) {
        if(temp.has(nums[i])) {
            return true
        }
        temp.add(nums[i])
    }
    return false
};
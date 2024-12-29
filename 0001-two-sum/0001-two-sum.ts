function twoSum(nums: number[], target: number): number[] {
    let numMap = new Map()
    //iterate, make a difference variabel
    //check wether the difference exist in the map
    //if not, store the current num and its index on map
    //it it is, return the current index and the index on the map
    for(let i=0; i<nums.length; i++) {
        let difference = target - nums[i]
        if(numMap.has(difference)) {
            return [numMap.get(difference), i]
        }
        numMap.set(nums[i], i)
    }
    return []
};
function twoSum(nums: number[], target: number): number[] {
    let numMap:{[key:number] : number} = {}
    //iterate, make a difference variabel
    //check wether the difference exist in the map
    //if not, store the current num and its index on map
    //it it is, return the current index and the index on the map
    for(let i=0; i<nums.length; i++) {
        let difference = target - nums[i]
        for(let key in numMap) {
            if(parseInt(key) === difference) {
                return [numMap[key], i]
            }
        }
        numMap[nums[i]] = i
    }
    return []
};
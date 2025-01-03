function topKFrequent(nums: number[], k: number): number[] {
    //using map?
    //iterate the input, store and count the current num
    //loop in k number, insert the key of the map on a result array
    //because the map structure is ordered from the least inserted
    //it means, it will be ordered by the most frequent elements
    let numsCount : {[key : number] : number} = {}
    for(let num of nums) {
        numsCount[num] = (numsCount[num] || 0) + 1
    }

    
    // convert the object into a key-value pair array
    //swap the index, from [key, value] to [value, key]
    //so that it can be sorted from the highest count
    let countArr : [number, number][] = Object.entries(numsCount).map(([num, freq]) => {
        return [freq, parseInt(num)]
    })
    countArr.sort((a, b) => b[0] - a[0])
    // arr.sort((a, b) => b[0] - a[0]);
    //slice the array, only top k length
    //return only the 1st index, which is the num
    let res : number[] = countArr.slice(0, k).map((pair) => {
        return pair[1]
    })

    return res
};
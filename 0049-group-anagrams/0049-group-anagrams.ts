function groupAnagrams(strs: string[]): string[][] {
    //sort the string
    //create a map, check whether the current string already on the map
    //if the sorted string already on the map
    //push the current string into the map value
    let res = new Map()

    for(let i=0; i<strs.length; i++) {
        let current = strs[i].split('').sort().join('')

        if(!res[current]) {
            res[current] = []
        } 
        res[current].push(strs[i])  
    }

    return Object.values(res)
};
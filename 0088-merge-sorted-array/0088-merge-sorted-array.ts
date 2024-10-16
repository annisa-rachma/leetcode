/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let res:number[] = []
    for(let i=0 ; i < m; i++) {
        res.push(nums1[i])
    }
    for(let i=0 ; i < n; i++) {
        res.push(nums2[i])
    }

    res.sort((a,b) => a - b)

    for(let i=0; i < res.length; i++) {
        nums1[i] = res[i]
    }
};
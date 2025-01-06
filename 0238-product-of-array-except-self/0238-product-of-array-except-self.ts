function productExceptSelf(nums: number[]): number[] {
    let n : number = nums.length
    let res: number[] = []
    let before : number[] = []
    let after : number [] =[]

    //initial value di array before & after index paling awal dan paling akhir = 1
    //karena sebelum dan sesudahnya ngga ada
    before[0] = 1
    after[n-1] = 1

    for(let i=1; i<n; i++) {
        before[i] = nums[i-1] * before[i-1]
    }
    for(let i=n-2; i>=0; i--) {
        after[i] = nums[i+1] * after[i+1]
    }
    for(let i=0; i<n; i++) {
        res[i] = before[i] * after[i]
    }

    return res
};
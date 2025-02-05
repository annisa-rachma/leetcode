function plusOne(digits: number[]): number[] {
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    //if all digits are 99
    return [1].concat(digits)
};
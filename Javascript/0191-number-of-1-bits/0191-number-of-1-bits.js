/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    let str = n.toString(2)
    for(let num of str) {
        if(num == '1') {
            count++
        }
    }
    return count
};
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = ""

    for(let start=0; start<=num.length-3; start++) {
        let end = start + 3
        let substring = num.substring(start, end)
        if(substring[0] === substring[1] && substring[1] === substring[2] && max < substring) {
            max = substring
        }     
    }

    return max
};
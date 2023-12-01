/**
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 */

/**
 * @param {string} s
 * @return {string[][]}
 */

 function isPalindrom(str) {
    return str === str.split('').reverse().join('')
}
var partition = function(s) {
    let result = []

    function backtrack(start, list) {
        if(start === s.length) {
            result.push([...list])
            return
        }

        for(let end=start+1; end<=s.length; end++) {
            let substring = s.substring(start, end)
            if(isPalindrom(substring)) {
                list.push(substring)
                backtrack(end, list) 
                list.pop()
            }
        }
    }
    backtrack(0,[])
    return result
};

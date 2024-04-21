/**
 * @param {string} s
 * @return {boolean}
 */
// functin to remove non alphanumeric charracters
function removeNonChar(inputString) { 
    return inputString.replace(/[^a-zA-Z0-9]/g, ''); 
} 
var isPalindrome = function(s) {
    if(s.length == 1) {
        return true
    }
    let str = removeNonChar(s).toLowerCase()
    //checked if palindrome or not
    return (str === str.split('').reverse().join('')) ? true : false
};
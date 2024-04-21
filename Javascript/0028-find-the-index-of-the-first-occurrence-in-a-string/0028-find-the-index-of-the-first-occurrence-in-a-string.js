/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let found = haystack.indexOf(needle)
    return found !== -1 ? found : -1
};
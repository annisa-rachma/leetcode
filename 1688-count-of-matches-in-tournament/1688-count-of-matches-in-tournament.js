/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  let matches = 0;

  while(n > 1) {
    matches += Math.floor(n/2)
    n = (n % 2 === 0) ? n / 2 :(n - 1) / 2 + 1;
  }

  return matches;
};
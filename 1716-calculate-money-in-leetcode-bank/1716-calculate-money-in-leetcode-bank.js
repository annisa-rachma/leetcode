/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  let sum = 0

  for(let i=0; i<n; i++) {
    sum += (i%7) + Math.floor(i/7) + 1
  }
  return sum  
};
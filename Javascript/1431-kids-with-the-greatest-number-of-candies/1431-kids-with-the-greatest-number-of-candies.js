/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let maxBefore = 0
  let maxAfter = 0
  for(let i = 0; i < candies.length; i++) {
    //find the largest candies before
    if(maxBefore < candies[i]) {
      maxBefore = candies[i]
    }
    //add each kids candies with extra candies
    candies[i] += extraCandies
    //find the largest candies after
    if(maxAfter < candies[i]) {
      maxAfter = candies[i]
    }
  }
  //if the final candies of each kids are more than or equal to the highest candies in the final array, return true
  return candies.map((candy) => {
    return (candy >= maxBefore) ? true : false
  })
};
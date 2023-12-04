// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x : Record a new score of x.
// '+' : Record a new score that is the sum of the previous two scores.
// 'D' : Record a new score that is the double of the previous score.
// 'C' : Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

/**
 * @param {string[]} operations
 * @return {number}
 */
 var calPoints = function(operations) {
    let res = []
    for(let i=0; i < operations.length; i++) {
      if(typeof Number(operations[i]) == "number" && isNaN(operations[i]) == false) {
        res.push(Number(operations[i]))
      }
      if(operations[i] == "+") {
        res.push(res[res.length-1]+res[res.length-2])
      }
      if(operations[i] == "C") {
        res.pop()
      }
      if(operations[i] == "D") {
        res.push(res[res.length-1]*2)
      }
    }
    let sum = 0
    for(let num of res) {
      sum += num
    }
    return sum
};
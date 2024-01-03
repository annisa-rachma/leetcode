/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
function substring_at(string, substring, position) {
    let slice = string.slice(position, position + substring.length)
    
    return slice === substring
}

var replaceWords = function (dictionary, sentence) {
  let arrSentence = sentence.split(" ");

  for (let root of dictionary) {
    for (let i=0; i<arrSentence.length; i++) {
      if (substring_at(arrSentence[i], root, 0)) {
        arrSentence[i] = root;
      }
    }
  }

  return arrSentence.join(' ');
};
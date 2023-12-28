/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    //create a temp variabel
    let mergedWords = ""

    //checking the shortest length
    let shorthestLength = 0
    if(word1.length < word2.length) {
        shorthestLength = word1.length
    } else {
        shorthestLength = word2.length
    }

    //checking each alphabet of word(max length is input word shortest length)
    for(let i = 0; i < shorthestLength; i++) {
            //concat the current index of word1 and word2 to temp variabel
            mergedWords += word1[i]
            mergedWords += word2[i]
    }

    //add the remainer alphabet to end of the merged string
    word1.length < word2.length ? mergedWords += word2.slice(shorthestLength) : mergedWords += word1.slice(shorthestLength)
    return mergedWords
};
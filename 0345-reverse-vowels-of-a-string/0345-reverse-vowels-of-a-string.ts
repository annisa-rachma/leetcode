function reverseVowels(s: string): string {
    //mark the position of each vowels
    //create a variable to store each vowels, reverse
    //put it back based on the position
    let dictVowels = ['a', 'i', 'u', 'e', 'o']
    let vowels:string[] = []
    let vowelsOrder:number[] = []
    for(let i = 0; i < s.length; i++) {
        if(dictVowels.includes(s[i].toLowerCase())) {
            vowels.push(s[i])
            vowelsOrder.push(i)
        }
    }
    vowels = vowels.reverse()
    let res:string[] = s.split('')
    for(let j=0; j<vowelsOrder.length; j++) {
        res[vowelsOrder[j]] = vowels[j]
    }
    return res.join('')
};
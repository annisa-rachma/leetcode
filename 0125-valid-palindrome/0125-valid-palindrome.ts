function isPalindrome(s: string): boolean {
    const cleanedS: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() ;
    let reversed: String[] = []

    for(let i=cleanedS.length - 1; i>=0; i--) {
        reversed.push(cleanedS[i])
    }

    return reversed.join('') === cleanedS 

};


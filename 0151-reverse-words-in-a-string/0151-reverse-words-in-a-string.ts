function reverseWords(s: string): string {
    //split string 
    //create an array consist of each word
    let sArr:string[] = s.trim().split(' ');
    
    //remove the ''
    let resArr:string[] = sArr.filter(item => item !== '');

    //reverse
    //join with '
    return  resArr.reverse().join(' ') ;
};
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false
    }

    //create an object to store the counting
    //iterate, if an alphabet exist in object
    //if it's from s, add 1 to the value
    //if it's from t, substract 1 to its value
    let res : {[key:string] : number} = {}
    for(let i=0; i<s.length; i++) {
        res[s[i]] = (res[s[i]] || 0) + 1
        res[t[i]] = (res[t[i]] || 0) - 1
    }

    //loop, check if there's a value !== 0, then it false
    for(let key in res) {
        if(res[key] !== 0) {
            return false
        }
    }
    return true
};
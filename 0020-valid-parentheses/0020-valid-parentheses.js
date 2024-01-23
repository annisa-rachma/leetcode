/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let temp = [];
  for (let i = 0; i < s.length; i++) {
     if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      temp.push(s[i]);
    } else if (temp[temp.length - 1] == "{" && s[i] == "}" && temp.length != 0) {
      temp.pop();
    } else if (temp[temp.length - 1] == "[" && s[i] == "]" && temp.length != 0) {
      temp.pop();
    } else if (temp[temp.length - 1] == "(" && s[i] == ")" && temp.length != 0) {
      temp.pop();
    } else {
        return false
    }
  }
  return temp.length != 0 ? false : true;
};
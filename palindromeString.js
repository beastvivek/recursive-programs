const reverseString = function (string, index) {
  if (index < 0) {
    return "";
  }
  return string[index] + reverseString(string, index - 1);
}

const isPalindrome = function (string) {
  return string === reverseString(string, string.length - 1);
}

console.log(isPalindrome("Hello"));
console.log(isPalindrome("nitin"));
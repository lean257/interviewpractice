//find the longest substring w/o repeating characters
var lengthOfLongestSubstring = function(s) {
  var result = '', maxL = 0, i = 0, cache = []
  while (i < s.length) {
    if (cache[s[i]]) {
      if (result.length > maxL) maxL = result.length
      var start = result.indexOf(s[i])
      result = result.substring(start + 1)
    }
    result += s[i]
    cache[s[i]]  = i + 1
    i++
  }
  if (result.length > maxL) maxL = result.length
  return maxL
}
//find the longest palindrome
var longestPalindrome = function(s) {
  var isPalindrome = function(s) {
    return s == s.split('').reverse().join('')
  }
  if (isPalindrome(s)) {
    return s;
  }
  
  var maxP = s[0];
  
  for (var i=0; i < s.length; i++) {
    var curr = s[i];
    for (var j= i + 1; j < s.length; j++) {
      curr += s[j];
      if (isPalindrome(curr) && curr.length > maxP.length) {
          maxP = curr;
      }
    }
  }
  return maxP;
}
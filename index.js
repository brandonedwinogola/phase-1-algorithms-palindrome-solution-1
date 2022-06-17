function reverse(word) {
    // 'abc' => 'cba'
    const wordArray = word.split("")
    const reversedwordArray = wordArray.reversed()
    const reversedWord = reversedWordArray.join("")
    return reversedWord;
}


function isPalindrome(word) {
    // Write your algorithm here
    // reverse the input string
    const reversedword = reverse(word)

    //if the input is the same as the reversed input 
    if (word === reversedword) {
        return true
    } else {
        return false
    }

}

/* 
  Add your pseudocode here
  if a word is same as the reverse it should return true

  function isPalindrome(word) {
    // reverse the input string
    // if the reversed string is the same as the input
    // return true
    // else
    return false
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
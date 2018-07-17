var word = 'Hello'
var newWord = ''
reverseString(word)
function reverseString(word) {
    for (nl = 0; nl <= word.length; nl++) {
        newWord = word.charAt(nl) + newWord
    }
    document.getElementById(reversedString).innerText = newWord
}
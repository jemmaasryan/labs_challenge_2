/** Day 16 Task 1
 * 
 * Write a function that counts the number of vowels in the text.
It should work for uppercase and lowercase letters.
 */
let text = "Armenia"
const vowels = ['A','E','I','O','U','a','e','i','o','u']

function countVowels(text, vowels) {
    let count = 0
    for(let i of text){
        if(vowels.includes(i)){
            count++
        }
    }
    return "There are " + count + " vowels in " + text
}
console.log(countVowels(text, vowels))
/** Day 15 Task 2
 * 
 * Ներմուծեք նախադասություն և տպեք յուրաքանչյուր տառի հանդիպելու քանակը։
 *Մեծատառն ու փոքրատառը էական չեն։
 Օրինակ՝ "hello" -> հ: 1, e: 1, l: 2, o: 1

 */
function countLetters(string) {
    let letters = string.split("").sort().join("");
    let count = 1;
    for (let i = 0; i < string.length; i++) {
      if (letters[i] == letters[i + 1]) {
        count++;
      } else {
        console.log(letters[i] + " " + count);
        count = 1;
      }
    }
  }

countLetters("hello");


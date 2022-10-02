/** Day 19 Task 1
 * 
 * Write a program called alpha_mirror that takes a string and displays this 
 * string after replacing each alphabetical character by the opposite 
 * alphabetical character, followed by a newline. 'a' becomes 'z', 'Z'
    becomes 'A' 'd' becomes 'w', 'M' becomes 'N’

    for "abc"
    output "zyx"
 */

const word = 'abc';

const alphaMirror = word => {
    const regex = /[A-Za-z]/g;
    return word.replace(regex, char => {
        const ascii = char.charCodeAt();
        let start, end;
          if(ascii > 96){
             start = 97;
             end = 122;
          } else {
             start = 65;
             end = 90;
          }
          return String.fromCharCode(end - (ascii-start));
       });
    }
console.log(alphaMirror(word));
console.log(alphaMirror('My horse is Amazing'));

/* Day 19 Task 2


*     *****
**     ****
***     ***
****     **
*****     *

*/
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

let n3 = 5;
let string3 = "";
for (let i = 1; i <= n3; i++) {
  // printing spaces
  for (let j = 0; j < n3-i; j++) {
    string3 += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string3 += "*";
  }
  string3 += "\n";
}
console.log(string3);

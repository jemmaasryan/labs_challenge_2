/* Day 19 Task 2


*     *****
**     ****
***     ***
****     **
*****     *

*/
function stars(n) {
  let string = ""
  let symbol = "*"
  for(let i = 1; i <= n; i++) {
    for(let j = n; j >= -1; j--) {
      if(i+j < n) {
        string += symbol
      } else if(i+j > n) {
        string += symbol
      } string += " " 
    }
    string += "\n"
  }
  return string
}
console.log(stars(5))

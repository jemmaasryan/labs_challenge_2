/* Day 19 Task 2


*     *****
**     ****
***     ***
****     **
*****     *

*/
function stars(n) {
  let str = ""
  let smb = "*"
  for(let i = 1; i <= n; i++) {
    for(let j = n; j >= -1; j--) {
      if(i+j < n) {
        str += smb
      } else if(i+j > n) {
        str += smb
      } str += " " 
    }
    str += "\n"
  }
  return str
}
console.log(stars(5))

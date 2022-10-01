/** Day 4 Task 2
 * 
 * Oddish or Evenish number
 */
function oddishOrEvenish(n) {
    let a = n.toString();
    let b = 0;
    for (let i = 0; i < a.length; i++) {
      b += parseInt(a[i]);
    }
    if (b % 2 === 1) {
      return "Oddish";
    } else 
        return "Evenish";
  }
  
console.log(oddishOrEvenish(43));  //oddish
console.log(oddishOrEvenish(373)); //oddish
console.log(oddishOrEvenish(4433)); //evenish
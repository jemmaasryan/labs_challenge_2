/** Day 4 Task 1
 * 
 * 
 *  Seven Boom!
 */
const sevenboom = (arr) => {
    let a = [];
    let b = "There is no 7 in the array.";
    for (let i = 0; i < arr.length; i++){
      a.push(arr[i].toString());
    }

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j] == 7) {
          b = "Boom!";
        }
      }
    }
    return b;
  };

console.log(sevenboom([1, 2, 3, 4, 5, 6, 7]));  //Boom!
console.log(sevenboom([8, 6, 33, 100]));        //There is no 7 in the array
console.log(sevenboom([2, 55, 60, 97, 86]));    // Boom!
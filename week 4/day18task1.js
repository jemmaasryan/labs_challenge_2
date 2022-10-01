/** Day 18 Task 1
 * 
 * Write a function that returns all the elements that are repeated more than
once in a given array.
const arr = [4,2,34,4,1,12,1,4] // return [4, 1]
 */
const arr = [4, 2, 34, 4, 1, 12, 1, 4]

function find(arr) {
    let sorted = arr.slice().sort();  
    
    let results = [];
    for (let i = 0; i < sorted.length - 1; i++) {
      if (sorted[i + 1] == sorted[i]) {
        results.push(sorted[i]);
      }
    }
    return results;
  }
  
console.log(find(arr));

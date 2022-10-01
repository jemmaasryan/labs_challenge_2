/** Day 17 Task 1
 * 
 * Given an array and a number N.  Write a recursive function that rotates an array
 *  N places to the left. (Hint: to add element to the beginning use arr.unshift())
[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] 3	[‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’]
[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] -2	[‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’] 

 */

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
let N = 3
let array = ['k']

function rotateArray(arr, N) {
    if(arr.length < 2) 
        return arr
    else {
        for(let j = 0; j < N; j++) {
            arr.shift(j)
            
        }
        // for(let i = 0; i < arr.length; i++) {

        // }
    }
    if(N == 0) {
        arr
    }
    return arr
   
}

console.log(rotateArray(arr));
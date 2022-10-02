/** Day 17 Task 1
 * 
 * Given an array and a number N.  Write a recursive function that rotates an array
 *  N places to the left. (Hint: to add element to the beginning use arr.unshift())
[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] 3	[‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’]
[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] -2	[‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’] 

 */

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


function rotateArray(arr, N) {
    let arrAfter = arr.splice(0, N)
    let arrBefore = arr.slice(0, arr.length)
    return [...arrBefore, ...arrAfter]
}

console.log(rotateArray(arr, 3));

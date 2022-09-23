//Day 11 task 1
let arr = [[1, 2, 3], [4, 5], [6]];     //[1, 2, 3, 4, 5, 6]

function combine(arr) {
    let combinedArr =  arr.flat(1) 
    /*flat() takes the depth level (how deep a nested array structure should be flattened)
    as its arguments, which by default is 1
    */
    return combinedArr;
}
console.log(combine(arr));
/** Day 18 Task 1
 * 
 * Write a function that returns all the elements that are repeated more than
once in a given array.
const arr = [4,2,34,4,1,12,1,4] // return [4, 1]
 */
const arr = [4, 2, 34, 4, 1, 12, 1, 4]

function find(arr) {
    let obj = arr.reduce((key, val) => {
        key[val] = key[val] ? key[val] + 1 : 1
        return key 
    }, {});
    

    let final = Object.keys(obj).filter((val) => obj[val] > 1)
    console.log(final)
}

find(arr);

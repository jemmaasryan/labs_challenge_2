// Day 14 Task 1

let arr = [10, 40, 30, 20, 50]

function secondLargest(arr) {
    if(arr.length === 1) return arr[0]              //base case, if array has only 1 element
    for(let i = 0; i < arr.length; i++) {           //sorting the array
        for(let j = 0; j < arr.length-1; j++) {
            if(arr[j] > arr[i]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr[arr.length-2];                       // returning second largest element
}                                                   //which is element in length - 2 index
console.log(secondLargest(arr))

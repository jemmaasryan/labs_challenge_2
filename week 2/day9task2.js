//Given an array of numbers which is almost sorted in ascending order. Find the index
//where sorting order is violated.

const arr = [-9, -4, -4, 3, 12, 4, 5];  //5
let firstIndex;
let lastIndex;
let index;

function getIndex(arr, firstIndex, lastIndex, index) {
    let midIndex = (firstIndex + lastIndex) / 2;

    for(let i = 0; i < midIndex; i++) {
        for(let j = 1; j < midIndex-1; j++) {
            if(arr[i] > arr[j]) {
                arr[i] = index;
                console.log(index);
            } else break;
        }

    } 

    for(let i = midIndex; i < arr.length; i++){
        for(let j = midIndex+1; j < arr.length-1; j++){
            if(arr[i] > arr[j]){
                arr[i] = index;
                console.log(index);
            } else break;
        }
    }
}

getIndex(arr);
console.log(index);
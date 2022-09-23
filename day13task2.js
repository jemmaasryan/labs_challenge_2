//Day 13 Task 2

/**
 *  Given a sequence of integers as an array, determine whether 
 * it is possible to obtain a strictly increasing sequence by
 * removing no more than one element from the array.
 * 
 * sequence = [1, 3, 2, 1], the output should be
    solution(sequence) = false
 *  
    sequence = [1, 3, 2], the output should be
    solution(sequence) = true.
 */

let sequence = [1, 3, 2]
let removingElement = false

function isStrictly(sequence) {
    for(let i = 0; i < sequence.length; i++){
        if(sequence[i] < sequence[i-1]){
            if(removingElement) return false;
            removingElement = true;
        }
        if(i === 1 || i + 1 === sequence.length) {
            continue;
          }
          else if (sequence[i] > sequence[i-2]) {
            sequence[i-1] = sequence[i-2];
          }
          else if(sequence[i-1] >= sequence[i+1]) {
            return false;
          }
    }
    return removingElement
}

console.log(isStrictly(sequence))

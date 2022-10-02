/**
 * Write a function, which receives two numbers as 
 * arguments and finds all numbers between them such that each digit of 
 * the number is even. 
 * CheckPoints: 
 * a.19, 42             “20, 22, 24, 26, 28, 40, 42” 99, 
 * b.199 “Such numbers does not exist.”
 */

function checkEvenDigits(a, b) {
    let evenNumbers = [];
    for(let i = a + 1; i < b; i++){
        let even = [];
        if(i % 2 == 0){
            even = even[i].map();
            if(even % 2 == 0){
               evenNumbers.push(even);
            }
        } else break;
    }
    return evenNumbers;
}
console.log(checkEvenDigits(19, 42));
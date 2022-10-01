/** Day 3 Task 2
 * 
 * Write function which reverse given number (without String methods)**
    
    Input 123456789
    Output 987654321
 */

function reverse(num) {
    let reversed = 0;
    while(num > 0) {
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    
    return reversed;
}
console.log(reverse(123456789));
/** Day 3 Task 1
 * 
 * Given a string, find out whether it is a palindrome or not. There are
    iterative ways to
    solve this problem, but you must solve it recursively**.
 */
const str = "aassaa";
function checkPalindrome(str){
    if(str.length === 1) 
        return true;
    if(str.length === 2) 
        return str[0] === str[1];
    if(str[0] === str.slice(-1)) 
        return checkPalindrome(str.slice(1,-1));
    
    return false;
}
console.log(checkPalindrome(str));

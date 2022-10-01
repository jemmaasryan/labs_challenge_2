/** Day 18 Task 2
 * 
 * Write a function that capitalizes the first letter of every word in a string.
    input is "tumo labs” output "Tumo Labs"
 */

const words = "tumo labs";
const space = words.split(" "); 

function capitalize(space) {
    for(let i = 0; i < space.length; i++){
        space[i] = space[i][0].toUpperCase() + space[i].substring(1);
    }
    return space.join(" ");
}

console.log(capitalize(space));

//Day 14 Task 2

/*Create a function that takes two dates and
 returns the number of days between the first and second dates.

getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6

getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3

*/

let oneDay = 24 * 60 * 60 * 1000;        // hours * minutes * seconds * milliseconds
let firstDate = new Date(2018, 12, 29);
let secondDate = new Date(2019, 1, 1);

function getDays(firstDate, secondDate) {
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
} 

console.log(getDays(firstDate, secondDate))
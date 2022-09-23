/**
 * Given a year, return the century it is in. The first century spans from 
 * the year 1 up to and including the year 100, the second - from the year 
 * 101 up to and including the year 200, etc.
 * 
 * For year = 1905, the output should be
    solution(year) = 20;
 */
let year = 1905;

function century(year) {
    if(year % 2 === 0) {
        year = Math.floor(year/99)      //differenc between one century and the next one is 99 years
    } else {
        year = Math.floor(year/99 + 1)
    }
    return year;
}

console.log(century(year));
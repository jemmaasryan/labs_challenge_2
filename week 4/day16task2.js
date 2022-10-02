
// Day 16 Task 2


function fizz(n, m) {
    for(let i = n; i <= m; i++) {
        if(i%3 == 0 && i%5 == 0) {
            console.log(i, "FizzBuzz")
        } else if(i%3 == 0) {
            console.log(i, "Fizz")
        } else if(i%5 == 0) {
            console.log(i, "Buzz")
        } else console.log(i)
    }
    return 
}

console.log(fizz(0, 15))

//day 12 task 1 

function power(base, pow) {
    if (pow === 0) return 1;

    return base * power(base, pow - 1);
}

console.log(power(2, 3));
console.log(power(3, 0));
//Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise
let num = 63;
let isPrime = true;

    if(num < 2){
        isPrime = false;
    } else if (num > 2) {
        for(let i = 2; i < num; i++){
            if(num % i == 0){ 
            isPrime = false;
            break;
            }
        }
    } else isPrime=true;

if(isPrime) console.log("yes"); 
else console.log("no");

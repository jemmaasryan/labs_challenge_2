// Day 5 Task 2


let numbers = [1, 4, 6, 9, 7, 8, 10] ;
function checker(arr){
    let missing ;
    let count = 0;
    for (let i = 1; i < 11; i++){
         if(arr.indexOf(i) === -1 ){ 
            missing = i;
            count++ ;
            console.log("pakasum en",missing);
        }
    }
    console.log('qanak',count);
}

checker(numbers);
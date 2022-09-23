const arr = ['TumoLabs', 'is', 'cool', 'yeah']; //'yeah', 'cool', 'is', 'TumoLabs'
//const arr = ['2', 0, 'A', null, '', false];

function reverse(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-1; j++) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
reverse(arr);
console.log(arr);

//can't figure out how to fix the placement of last two elements
let a = 12;
let b = -7;
let c = 6; 

const arrSort = [];

if(a < b && a < c) {
    arrSort.push(a);
    if(b < c){
        arrSort.push(b);
        arrSort.push(c);
    } else {
        arrSort.push(c);
        arrSort.push(b);
    }

} else if(b < a && b < c) {
    arrSort.push(b);
    if(a < c) {
        arrSort.push(a);
        arrSort.push(c);
    } else {
        arrSort.push(c);
        arrSort.push(a);
    }
} else if(c < a && c < b) {
    arrSort.push(c);
    if(a < b) {
        arrSort.push(a);
        arrSort.push(b);
    } else {
        arrSort.push(b);
        arrSort.push(a);
    }
}

console.log(arrSort);
//Day 5 Task 1

let user = {
    firstName: 'Anna',
    lastName: 'Ananyan',
    age: 28,
    city: 'Yerevan',

}
function infoArr (arr){
    if(Array.isArray(arr) || typeof arr === 'number' || typeof arr === 'string' ){
        alert('That not an object')
    }
    let keys = []
    let values = []
    for (let key in arr){
        keys.push(key);
        values.push(arr[key]);
    }
    console.log(keys);
    console.log(values);
};
infoArr(user);
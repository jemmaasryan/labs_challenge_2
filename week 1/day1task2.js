//Day 1 Task 2

function remove(arr, mul) {
    let result = arr.filter(function (e) {
        return e % mul !== 0;
    })
    for(let i = 0; i <= result.length; i++){
        console.log(result[i] * result.length);
    }
}

remove([5, 4, 78, 0, -3, 7], 2)
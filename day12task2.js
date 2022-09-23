//Day 12 Task 2

/*
1 2 3 
4 5 6 —> [6, 15, 24] 
7 8 9 
*/

let matrix = [[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]]

const sumOfRows = matrix.reduce((sumOfRows, currentRow) => {
    sumOfRows.push(currentRow.reduce((sum, currentEl) => {
        return sum + currentEl;
    }, 0))
    return sumOfRows;
}, []);

console.log(sumOfRows)
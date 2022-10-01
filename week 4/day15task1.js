/** Day 15 Task 1 
 * 
 * smallest value
 * 4 6 11 8 1
   5 (0) 2 27 9         արդյունքը՝ 3 2 18 4 33
   3 2 18 4 33
   21 8 5 8 1 
 */

let matrix = [[4,  6, 11, 8,  1 ],
              [5,  0, 2,  27, 9 ],
              [3,  2, 18, 4,  33],
              [21, 8, 5,  8,  1 ] ];

function findSmallest(matrix) {
    let smallest;
    for(let row = 0; row < matrix.length; row++){ 
        for(let col = 0; col < matrix.length; col++){
            if(matrix[row][col] < matrix[row+1][col+1]) {
                matrix[row][col] = smallest;
                // return smallest;
            }
        }
    }
    return smallest
}
console.log(findSmallest(matrix))


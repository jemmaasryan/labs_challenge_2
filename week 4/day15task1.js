/** Day 15 Task 1 
 * 
 * smallest value
 * 4 6 11 8 1
   5 (0) 2 27 9         արդյունքը՝ 3 2 18 4 33
   3 2 18 4 33
   21 8 5 8 1 
 */

let matrix = [[4,  6, 11, 8,  1 ],
              [5,  3, 2,  27, 9 ],
              [3,  0, 18, 4,  33],
              [21, 5, 5,  8,  1 ] ];

function findSmallest(matrix) {
    let smallest = [];
    for(let row = 0; row < matrix.length; row++){ 
        smallest.push(Math.min(...matrix[row]))
    }

    let min = Math.min(...smallest)
    let final = []
    if(smallest.indexOf(min)+1 >= matrix.length){
        console.log(matrix[0])
    } 
    final = matrix[smallest.indexOf(min) +1]
    return final
}
console.log(findSmallest(matrix))

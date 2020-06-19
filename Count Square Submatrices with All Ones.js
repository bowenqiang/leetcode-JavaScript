const matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]

const matrix2 = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]

allOne = (matrix, x, y, size) => {
    let isAllOne = 1;
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            isAllOne = isAllOne && matrix[i][j];
        }
    }
    return isAllOne;
}

countHelper = (matrix, size) => {
    let count = 0;
    for (let i = 0; i <= matrix.length - size; i++) {
        for (let j = 0; j <= matrix[0].length - size; j++) {
            if (allOne(matrix,i,j,size)) {
                count++;
            }
        }
    }
    return count;
}

countSquares = (matrix) => {
    const maxSize = Math.min(matrix.length, matrix[0].length);
    let count = 0;
    for (let size = 1 ;size <= maxSize; size++) {
        count = count + countHelper(matrix, size);
    }
    return count;
}

console.log(countSquares(matrix));
console.log(countSquares(matrix2));
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0, row = grid.length;
    if (row === 0) {
        return count;
    }
    var col = grid[0].length;
    for (var i = 0; i < row; ++i) {
        for (var j = 0; j < col; ++j) {
            if (grid[i][j] === '1') {
                helper(grid, i, j);
                count++;
            }
        }
    }
    return count;
};

var helper = function(grid, x, y) {
    if (x >=0 && y >=0 && x < grid.length && y < grid[0].length && grid[x][y] === '1') {
        grid[x][y] = 'x';
        helper(grid, x - 1, y);
        helper(grid, x, y - 1);
        helper(grid, x + 1, y);
        helper(grid, x, y + 1);
    }
}
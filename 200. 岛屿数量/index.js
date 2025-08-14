/**
 * @param {character[][]} grid
 * @return {number}
 */
// 广度遍历
var numIslands = function (grid) {
  const bfs = (grid, r, c) => {
    let rowMax = grid.length
    let columnMax = grid[0].length
    let q = []
    q.push(r * columnMax + c)
    while (q.length !== 0) {
      let pos = q.shift()
      let row = Math.floor(pos / columnMax)
      let column = pos % columnMax
      if (row + 1 < rowMax && grid[row + 1][column] == '1') {
        q.push((row + 1) * columnMax + column)
        grid[row + 1][column] = '0'
      }
      if (row - 1 >= 0 && grid[row - 1][column] == '1') {
        q.push((row - 1) * columnMax + column)
        grid[row - 1][column] = '0'
      }
      if (column + 1 < columnMax && grid[row][column + 1] == '1') {
        q.push(row * columnMax + column + 1)
        grid[row][column + 1] = '0'
      }
      if (column - 1 >= 0 && grid[row][column - 1] == '1') {
        q.push(row * columnMax + column - 1)
        grid[row][column - 1] = '0'
      }
    }
  }
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        bfs(grid, i, j)
        res++;
      }
    }
  }
  return res
};

// 深度遍历
// var numIslands = function (grid) {
//   const dfs = (grid, i, j) => {
//     if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == '0') {
//       return
//     }
//     grid[i][j] = '0'
//     dfs(grid, i - 1, j)
//     dfs(grid, i + 1, j)
//     dfs(grid, i, j - 1)
//     dfs(grid, i, j + 1)
//   }
//   let res = 0
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] == "1") {
//         dfs(grid, i, j)
//         res++;
//       }
//     }
//   }
//   return res
// };
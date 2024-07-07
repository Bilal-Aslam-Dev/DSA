const firstPlayer = 'x'
const secondPlayer = 'o'

const board = [
  [secondPlayer, secondPlayer, firstPlayer],
  [secondPlayer, secondPlayer, secondPlayer],
  [firstPlayer, firstPlayer, secondPlayer],
]
function findWinner() {
  let winner = false

  // Check rows
  for (let index = 0; index < board.length; index++) {
    const curentRow = board[index]
    const isAnyWinnerFoundInRow = findWinnerHorizontally(curentRow)

    if (isAnyWinnerFoundInRow) {
      winner = isAnyWinnerFoundInRow
      return winner
    }
  }

  // Convert columns into row
  let columnsToRow = generateBoard(board.length)

  for (let index = 0; index < board.length; index++) {
    const curentRow = board[index]
    for (let col = 0; col < curentRow.length; col++) {
      const currentCol = curentRow[col]
      columnsToRow[col][index] = currentCol
    }
  }

  // Check columns
  for (let k = 0; k < columnsToRow.length; k++) {
    const currentCol = columnsToRow[k]
    const isAnyWinnerFoundInCol = findWinnerHorizontally(currentCol)
    if (isAnyWinnerFoundInCol) {
      winner = isAnyWinnerFoundInCol
      return winner
    }
  }

  // Check diagonally
  let diagonalCellsToRow = extractDiagonalCells(board)

  for (let index = 0; index < diagonalCellsToRow.length; index++) {
    const findWinnerDiagonally = findWinnerHorizontally(diagonalCellsToRow[index])

    if (findWinnerDiagonally) {
      winner = findWinnerDiagonally
      return winner
    }
  }

  return winner
}

function extractDiagonalCells(board) {
  const boardLength = board.length

  const diagonalCells = [[Array(boardLength)], Array(boardLength)]

  for (let index = 0; index < boardLength; index++) {
    let currentRow = board[index]

    const firstCellInRow = currentRow[index]
    const lastCellInRow = currentRow[boardLength - 1 - index]
    diagonalCells[0][index] = firstCellInRow
    diagonalCells[1][index] = lastCellInRow
  }

  return diagonalCells
}

function generateBoard(size) {
  const generatedBoard = []

  for (let index = 0; index < size; index++) {
    generatedBoard.push(Array(size))
  }

  return generatedBoard
}

function findWinnerHorizontally(arr) {
  const isAnyValueUndefined = arr?.some((i) => !i)
  if (isAnyValueUndefined || !arr || arr?.length < 1) return false

  let hashMap = {}

  for (let index = 0; index < arr.length; index++) {
    hashMap[arr[index]] = true
  }

  return Object.keys(hashMap).length === 1 ? arr[0] : false
}

console.log(findWinner())

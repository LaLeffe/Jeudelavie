export const getCellIdFromIndex = function(cellIndex, columnsCount) {
  const row = Math.floor((cellIndex - 1) / columnsCount)
  const column = (cellIndex - 1) % columnsCount

  return getCellId(row, column)
}

export const getCellId = function(row, column) {
  return `R${row}C${column}`
}

export const getCoordinatesFromCellId = function (cellId) {
  const [rowString, columnIndex] = cellId.split('C') // ['R12', '24]
  const rowIndex = rowString.substring(1)

  return [parseInt(rowIndex), parseInt(columnIndex)]
}

export const getRandomizedMap = (rowsCount, columnsCount) => {
  const aliveCellsMap = {}

  for (let row = 0; row < rowsCount; row++) {
    for (let column = 0; column < columnsCount; column++) {
      const isAlive = Math.random() >= 0.7
      if (isAlive) {
        aliveCellsMap[getCellId(row, column)] = true
      }
    }
  }
  return aliveCellsMap
}

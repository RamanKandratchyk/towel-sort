module.exports = function towelSort(matrix) {

  if (arguments.length === 0) return [];

  if (matrix.length === 0) return [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) { matrix[i].reverse() };
  }

  return matrix.join(',').split(',').map(Number);
}

module.exports = function towelSort(matrix) {
  const resultArray = [];

  if (!matrix || !matrix.length) {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        resultArray.push(matrix[i]);
      } else {
        resultArray.push(matrix[i].reverse());
      }
    }

    return resultArray.join(',').split(',').map(element => +element);
  }
}
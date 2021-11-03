const wordSearch = (letters, word) => {

  const transposedLetters = transpose(letters);
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  
  
  if (letters === []) {
    return false;
  }
  for (let h of horizontalJoin) {
    if (h.includes(word)) return true;
  }
  for (let v of verticalJoin) {
    if (v.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
};
  

module.exports = wordSearch;
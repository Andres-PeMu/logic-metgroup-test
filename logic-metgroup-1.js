class MyMatrix {
    
  constructor(matrix) {
    this.matrix = matrix;
  }

  dimension() {
    const getDepth = (arr) => {
      if (Array.isArray(arr)) {
        let maxDepth = 0;
        for (let item of arr) {
          const depth = getDepth(item);
          maxDepth = Math.max(maxDepth, depth);
        }
        return maxDepth + 1;
      } else {
        return 0;
      }
    };

    return getDepth(this.matrix);
  }

  straight() {
    const isUniform = (arr) => {
      if (!Array.isArray(arr)) {
        return true;
      }

      const firstSize = arr[0].length;
      for (let i = 1; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && arr[i].length !== firstSize) {
          return false;
        }
      }

      return true;
    };

    return isUniform(this.matrix);
  }

  compute() {
    const flatten = (arr) => {
      return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flatten(item) : item);
      }, []);
    };

    const flattenedArray = flatten(this.matrix);
    return flattenedArray.reduce((sum, num) => sum + num, 0);
  }
}

// Para mostrar en Ui
function showResult(resultId, matrixId, value, matrix) {
  const resultElement = document.getElementById(resultId);
  resultElement.textContent = value;

  const matrixElement = document.getElementById(matrixId);
  matrixElement.textContent = JSON.stringify(matrix);
}

// Ejemplos de uso
const a = [1, 2];
const b = [
  [1, 2],
  [2, 4],
];
const c = [
  [1, 2],
  [2, 4],
  [2, 4],
];
const d = [
  [
    [3, 4],
    [6, 5],
  ],
];
const e = [
  [[1, 2, 3]],
  [
    [5, 6, 7],
    [5, 4, 3],
  ],
  [
    [3, 5, 6],
    [4, 8, 3],
    [2, 3],
  ],
];
const f = [
  [
    [1, 2, 3],
    [2, 3, 4],
  ],
  [
    [5, 6, 7],
    [5, 4, 3],
  ],
  [
    [3, 5, 6],
    [4, 8, 3],
  ],
];

const matrixA = new MyMatrix(a);
const matrixB = new MyMatrix(b);
const matrixC = new MyMatrix(c);
const matrixD = new MyMatrix(d);
const matrixE = new MyMatrix(e);
const matrixF = new MyMatrix(f);

// Mostrar los resultados y matrices en el navegador
showResult('result-dimension-matrixA', 'matrixA', `Dimension matrixA: ${matrixA.dimension()}`, matrixA.matrix);
showResult('result-dimension-matrixB', 'matrixB', `Dimension matrixB: ${matrixB.dimension()}`, matrixB.matrix);
showResult('result-dimension-matrixC', 'matrixC', `Dimension matrixC: ${matrixC.dimension()}`, matrixC.matrix);
showResult('result-dimension-matrixD', 'matrixD', `Dimension matrixD: ${matrixD.dimension()}`, matrixD.matrix);
showResult('result-dimension-matrixE', 'matrixE', `Dimension matrixE: ${matrixE.dimension()}`, matrixE.matrix);
showResult('result-dimension-matrixF', 'matrixF', `Dimension matrixF: ${matrixF.dimension()}`, matrixF.matrix);

showResult('result-straight-matrixA', 'matrixA', `Straight matrixA: ${matrixA.straight()}`, matrixA.matrix);
showResult('result-straight-matrixB', 'matrixB', `Straight matrixB: ${matrixB.straight()}`, matrixB.matrix);
showResult('result-straight-matrixC', 'matrixC', `Straight matrixC: ${matrixC.straight()}`, matrixC.matrix);
showResult('result-straight-matrixD', 'matrixD', `Straight matrixD: ${matrixD.straight()}`, matrixD.matrix);
showResult('result-straight-matrixE', 'matrixE', `Straight matrixE: ${matrixE.straight()}`, matrixE.matrix);
showResult('result-straight-matrixF', 'matrixF', `Straight matrixF: ${matrixF.straight()}`, matrixF.matrix);

showResult('result-compute-matrixA', 'matrixA', `Compute matrixA: ${matrixA.compute()}`, matrixA.matrix);
showResult('result-compute-matrixB', 'matrixB', `Compute matrixB: ${matrixB.compute()}`, matrixB.matrix);
showResult('result-compute-matrixC', 'matrixC', `Compute matrixC: ${matrixC.compute()}`, matrixC.matrix);
showResult('result-compute-matrixD', 'matrixD', `Compute matrixD: ${matrixD.compute()}`, matrixD.matrix);
showResult('result-compute-matrixE', 'matrixE', `Compute matrixE: ${matrixE.compute()}`, matrixE.matrix);
showResult('result-compute-matrixF', 'matrixF', `Compute matrixF: ${matrixF.compute()}`, matrixF.matrix);
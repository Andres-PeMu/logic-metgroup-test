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
console.log("respuestas prueba logica 1");
const matrixA = new MyMatrix(a);
const matrixB = new MyMatrix(b);
const matrixC = new MyMatrix(c);
const matrixD = new MyMatrix(d);
const matrixE = new MyMatrix(e);
const matrixF = new MyMatrix(f);

console.log('logic 01 dimension matrixA',matrixA.dimension()); // Salida: 1
console.log('logic 01 dimension matrixB',matrixB.dimension()); // Salida: 2
console.log('logic 01 dimension matrixC',matrixC.dimension()); // Salida: 2
console.log('logic 01 dimension matrixD',matrixD.dimension()); // Salida: 3
console.log('logic 01 dimension matrixE',matrixE.dimension()); // Salida: 3
console.log('logic 01 dimension matrixF',matrixF.dimension()); // Salida: 3

console.log('logic 01 straight matrixA',matrixA.straight()); // Salida: true
console.log('logic 01 straight matrixB',matrixB.straight()); // Salida: true
console.log('logic 01 straight matrixC',matrixC.straight()); // Salida: true
console.log('logic 01 straight matrixD',matrixD.straight()); // Salida: true
console.log('logic 01 straight matrixE',matrixE.straight()); // Salida: false
console.log('logic 01 straight matrixF',matrixF.straight()); // Salida: true

console.log('logic 01 compute matrixA',matrixA.compute()); // Salida: 3
console.log('logic 01 compute matrixB',matrixB.compute()); // Salida: 9
console.log('logic 01 compute matrixC',matrixC.compute()); // Salida: 15
console.log('logic 01 compute matrixD',matrixD.compute()); // Salida: 18
console.log('logic 01 compute matrixE',matrixE.compute()); // Salida: 70
console.log('logic 01 compute matrixF',matrixF.compute()); // Salida: 66

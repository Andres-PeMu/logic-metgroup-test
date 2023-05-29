# logic-metgroup-test
Prueba de Desarrollo
Este repositorio contiene las soluciones para dos pruebas de desarrollo.

Prueba 1: Clase MyMatrix
La clase MyMatrix proporciona métodos para realizar operaciones en una matriz.

Uso
javascript
Copy code
const matrix = new MyMatrix(arr);

// Métodos disponibles
matrix.dimension(); // Obtiene la dimensión de la matriz
matrix.straight(); // Verifica si la matriz es recta
matrix.compute(); // Calcula la suma de todos los elementos de la matriz
Ejemplo
javascript
Copy code
const a = [1, 2];
const matrixA = new MyMatrix(a);
console.log('Dimension matrixA:', matrixA.dimension()); // Salida: 1
console.log('Is straight matrixA:', matrixA.straight()); // Salida: true
console.log('Compute matrixA:', matrixA.compute()); // Salida: 3
Prueba 2: Clase MyArray
La clase MyArray proporciona métodos para operar en una cadena que representa una operación matemática.

Uso
javascript
Copy code
const array = new MyArray(string);

// Métodos disponibles
array.operation(); // Verifica si la cadena es una operación válida
array.compute(); // Calcula el resultado de la operación si es válida, de lo contrario, devuelve false
Ejemplo
javascript
Copy code
const b = "2 + 10 / 2 - 20";
const myArrayB = new MyArray(b);
console.log('Is operation myArrayB:', myArrayB.operation()); // Salida: true
console.log('Compute myArrayB:', myArrayB.compute()); // Salida: -13
Requisitos
Se requiere un navegador web compatible con HTML5 para ejecutar las pruebas.
Configuración
Clona este repositorio en tu máquina local.
Abre el archivo index.html en tu navegador web.
Nota: Asegúrate de tener una conexión a Internet activa para cargar los archivos JavaScript.

Contribución
Si deseas contribuir a este proyecto, por favor sigue los pasos a continuación:

Haz un fork de este repositorio.
Crea una rama para tu contribución.
Realiza las modificaciones deseadas.
Envía un pull request.
Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

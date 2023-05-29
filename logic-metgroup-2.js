class MyArray {
    constructor(string) {
      this.string = string;
    }
  
    operation() {
      const operationRegex = /^\s*\(?(\d+(\.\d+)?)\s*([+\-*\/]\s*\d+(\.\d+)?\s*)*\)?\s*/;
  
      return operationRegex.test(this.string);
    }
  
    compute() {
      const isValidOperation = this.operation();
  
      if (!isValidOperation) {
        return false;
      }
  
      try {
        const result = eval(this.string);
        return result;
      } catch (error) {
        return false;
      }
    }
  }

// Ejemplos de uso
{
  console.log("respuestas prueba logica 2");
  const a = "Hello world";
  const b = "2 + 10 / 2 - 20";
  const c = "(2 + 10) / 2 - 20";
  const d = "(2 + 10 / 2 - 20";

  const myArrayA = new MyArray(a);
  const myArrayB = new MyArray(b);
  const myArrayC = new MyArray(c);
  const myArrayD = new MyArray(d);

  console.log('logic 02 operation myArrayA',myArrayA.operation()); // Salida: false
  console.log('logic 02 operation myArrayB',myArrayB.operation()); // Salida: true
  console.log('logic 02 operation myArrayC',myArrayC.operation()); // Salida: true
  console.log('logic 02 operation myArrayD',myArrayD.operation()); // Salida: false

  console.log('logic 02 compute myArrayA',myArrayA.compute()); // Salida: false
  console.log('logic 02 compute myArrayB',myArrayB.compute()); // Salida: -13
  console.log('logic 02 compute myArrayC',myArrayC.compute()); // Salida: -14
  console.log('logic 02 compute myArrayD',myArrayD.compute()); // Salida: false
}

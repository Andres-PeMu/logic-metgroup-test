class MyArray {
  constructor(string) {
    this.string = string;
  }

  operation() {
    const operationRegex =
      /^\s*\(?(\d+(\.\d+)?)\s*([+\-*\/]\s*\d+(\.\d+)?\s*)*\)?\s*/;

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

function showResult(id, result) {
  const element = document.getElementById(id);
  element.textContent = result;
}

// Ejemplos de uso
{
  const a = "Hello world";
  const b = "2 + 10 / 2 - 20";
  const c = "(2 + 10) / 2 - 20";
  const d = "(2 + 10 / 2 - 20";

  const myArrayA = new MyArray(a);
  const myArrayB = new MyArray(b);
  const myArrayC = new MyArray(c);
  const myArrayD = new MyArray(d);

  showResult("result-operation-myArrayA", `Operation myArrayA: ${a}`);
  showResult("result-operation-myArrayB", `Operation myArrayB: ${b}`);
  showResult("result-operation-myArrayC", `Operation myArrayC: ${c}`);
  showResult("result-operation-myArrayD", `Operation myArrayD: ${d}`);

  showResult(
    "result-compute-myArrayA",
    `Compute myArrayA: ${myArrayA.compute()}`
  );
  showResult(
    "result-compute-myArrayB",
    `Compute myArrayB: ${myArrayB.compute()}`
  );
  showResult(
    "result-compute-myArrayC",
    `Compute myArrayC: ${myArrayC.compute()}`
  );
  showResult(
    "result-compute-myArrayD",
    `Compute myArrayD: ${myArrayD.compute()}`
  );
}

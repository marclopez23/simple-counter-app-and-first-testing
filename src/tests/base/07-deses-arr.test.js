import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en desestructuración", () => {
  test("debe de retornar un string y un num", () => {
    const [letras, numeros] = retornaArreglo();

    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");
  });
});

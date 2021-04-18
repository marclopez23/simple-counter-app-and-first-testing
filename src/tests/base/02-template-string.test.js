import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("Prueba en el metodo getSaludo", () => {
    const nombre = "Marc";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });
    
    
  test("getSaludo debe retornar en valor carlos por default", () => {
    const nombre = "Marc";

    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos");
  });   

});

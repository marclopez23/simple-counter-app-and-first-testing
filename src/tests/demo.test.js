describe("Pruebas en el archivo demo.test.js", () => {
  test("Los stings deben de ser iguales", () => {
    // 1. Inicialización
    const mensaje = "Hola Mundo";

    // 2. Estimulo
    const mensaje2 = `Hola Mundo`;

    // 3. Observación
    expect(mensaje).toBe(mensaje2);
  });
});

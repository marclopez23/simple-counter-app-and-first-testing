import { getImagen } from "../../base/11-async-await";

describe("Pruebas con async-await y fetch", () => {
  test("debe de retronar el url de la img", async () => {
    const url = await getImagen();
    expect(url.includes("https://")).toBe(true);
  });
});

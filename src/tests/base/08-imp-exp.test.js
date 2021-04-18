import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("pruebas en funciones de heroes", () => {
  test("debe de retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const hereoData = heroes.find((h) => h.id === id);

      expect(heroe).toEqual(hereoData);
      

      
  });
    test("debe de retornar undefined si heroe no existe", () => {
      const id = 10;
      const heroe = getHeroeById(id);

      expect(heroe).toBe(undefined);
    });
});


describe("pruebas en funciones de heroesbyOwner", () => {
  test("debe de retornar los heroes de DC", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);

    const hereoData = heroes.filter((h) => h.owner === owner);

    expect(heroe).toEqual(hereoData);
  });
  test("debe de retornar los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);

    expect(heroe.length).toEqual(2);
  });
});
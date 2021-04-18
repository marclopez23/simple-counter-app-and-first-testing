import React from "react";
//import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import PrimeraApp from "../Views/PrimeraApp";

describe("Pruebas en PrimeraApp", () => {
  /*test("debe de mostrar el mensaje", () => {
    const saludo = "Hola soy Marc";
    const { getByText } = render(<PrimeraApp saludo="Hola soy Marc" />);

    expect(getByText(saludo)).toBeInTheDocument();
  });*/

  test("debe de mostar PrimeraApp", () => {
    const saludo = "Hola soy Marc";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostar el subtitulo que le pasamos por props", () => {
    const saludo = "Hola soy Marc";
    const subtitulo = "Frontend Developer";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const txtParrafo = wrapper.find("p").text();
    expect(txtParrafo).toBe(subtitulo);
  });
});

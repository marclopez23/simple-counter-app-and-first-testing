import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../components/CounterApp/CounterApp";

describe("Pruebas en CounterApp", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });
  test("CounterApp se muestra correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("CounterApp recibe bien las props", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const valuePrinted = wrapper.find("h2").text().trim();

    expect(valuePrinted).toBe(value.toString());
  });

  test("debe de incrementar con el boton +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const valuePrinted = wrapper.find("h2").text().trim();

    expect(valuePrinted).toBe("1");
  });

  test("debe de restar con el boton -1", () => {
    wrapper.find("button").at(1).simulate("click");
    const valuePrinted = wrapper.find("h2").text().trim();
    expect(valuePrinted).toBe("-1");
  });

  test("debe de resetear el valor", () => {
    const value = 105;
    const wrapper = shallow(<CounterApp value={value} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    const valuePrinted = wrapper.find("h2").text().trim();
    expect(valuePrinted).toBe(value.toString());
  });
});

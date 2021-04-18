import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./components/CounterApp/CounterApp";
import PrimeraApp from "./Views/PrimeraApp";
import "./index.css";

const root = document.querySelector("#root");

ReactDOM.render(<CounterApp value={10} />, root);
//ReactDOM.render(<PrimeraApp saludo="Hola soy Marc" />, root);

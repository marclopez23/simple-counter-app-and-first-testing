import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handeleAdd = () => {
    setCounter((state) => (state += 1));
  };

  const handeleSubstract = () => {
    setCounter((state) => (state -= 1));
  };

  const handeleReset = () => {
    setCounter(value);
  };

  return (
    <section>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={() => handeleAdd()}> +1 </button>
      <button onClick={() => handeleSubstract()}> -1 </button>
      <button onClick={() => handeleReset()}> Reset </button>
    </section>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;

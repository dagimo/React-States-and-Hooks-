import { useState, useMemo } from "react";

function ReactuseMemo() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [bgColor, setBgColor] = useState("bg-gray-100");

  // Memoize the 'sum' value
  const sum = useMemo(() => {
    console.log("Calculating the sum");
    return a + b;
  }, [a, b]);

  const incrementA = () => {
    setA((prevA) => prevA + 1);
  };

  const incrementB = () => {
    setB((prevB) => prevB + 1);
  };

  const changeBackgroundColor = () => {
    setBgColor((prevColor) =>
      prevColor === "bg-gray-100" ? "bg-yellow-100" : "bg-gray-100"
    );
  };

  const buttonStyle = "component-button default-button";

  return (
    <div
      className="component-wrapper"
      style={{
        backgroundColor: bgColor === "bg-gray-100" ? "#f4f6f8" : "#fffacd",
      }}
    >
      {" "}
      {/* Apply background color directly */}
      <div className="component-card">
        <h2 className="component-title">React useMemo Example</h2>
        <p className="component-description">
          Demonstrates that the sum is only recalculated when A or B changes.
        </p>
        <div className="component-display">Sum: {sum}</div>
        <div className="info-row">
          <span className="info-label">Value A:</span>
          <span className="info-value">{a}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Value B:</span>
          <span className="info-value">{b}</span>
        </div>
        <button className={buttonStyle} onClick={incrementA}>
          Increment A
        </button>
        <button className={buttonStyle} onClick={incrementB}>
          Increment B
        </button>
        <button className={buttonStyle} onClick={changeBackgroundColor}>
          Change Background
        </button>
        <div className="component-info">
          Notice the "Calculating the sum" message in the console only appears
          when you increment A or B, not when you change the background color.
        </div>
      </div>
    </div>
  );
}

export default ReactuseMemo;

//useMemo is a React hook that helps optimize performance by memoizing the result of a calculation. 
//avoiding redundant computations
//provides the intial result during re-rendering 

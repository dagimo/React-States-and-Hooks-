import {useState} from 'react'

function IncreaseDecreaseCount() {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  }
  return (
    <>
      <div className="component-wrapper">
        <div className="component-card">
          <h2>Initial Click Count: {count}</h2>
          <button
            className="component-button default-button"
            onClick={increaseCount}
          >Increase</button>
          <button
            className="component-button default-button"
            onClick={decreaseCount}
          >Decrease</button>
          <button
            className="component-button default-button"
            onClick={resetCount}
          >Reset</button>
        </div>
      </div>
    </>
  );
}

export default IncreaseDecreaseCount;
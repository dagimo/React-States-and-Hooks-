import {useEffect, useState} from 'react'

function UseEffectForTitle() {
  const[count,setCount]= useState(0);
  const handleClick = ()=>{
    setCount(prevCount => prevCount + 1);
  };
  useEffect (()=>{
    alert ('Component is mounted');
  }, []);
  useEffect( ()=> {
    document.title = `Title Count ${count}`;
  }, [count]

  );

  return (
    <>
      <div className="component-wrapper">
        <div className='component-card'>
          <button className='component-button default-button' onClick={handleClick}>Click here</button>
          <p >Count Displayer: {count}</p>
        </div>
      </div>
    </>
  );
}

export default UseEffectForTitle
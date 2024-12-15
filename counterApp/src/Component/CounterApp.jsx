import  { useState } from 'react';


export function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign:'center',marginTop:'150px'}}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increment} style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>Increment</button>
        <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>Decrement</button>
        <button onClick={reset} style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>Reset</button>
      </div>
    </div>
  );
}



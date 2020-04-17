import React, { useState } from 'react';
import UpdateCounter1 from './component2';

export default  function Component1() {
  
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h2>Component 1</h2>

      <p>Counter one with userState hook :{count}</p>
      <p>Counter two with userState hook:{count2}</p>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me2
      </button>
<hr></hr>
      <UpdateCounter1 counter={count}></UpdateCounter1>

    </div>
  );
}
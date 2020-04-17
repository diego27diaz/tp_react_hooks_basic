import React from 'react';

export default  function Home(props) {
     
  return (
    <div>
       <h2>Component 3</h2>
     <button onClick={() => props.memcallback(props.counter)}>useCallback hook from component 2</button>
    </div>
  );
}
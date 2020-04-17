import React, {useEffect, useCallback} from 'react';
import UpdateCallbackCounter1 from './component3';

export default  function Home(props) {
  
  const memoizedCallback = useCallback(
    (counterParam) => {
        alert("use callback hook " + counterParam)
    },
    [],
  );

  useEffect(() => {
    document.title = `You clicked ${props.counter} times`;  
  })

    
  return (
    <div>
       <h2>Component 2</h2>
     <span>
        Counter from component 1: {props.counter}
     </span><br></br>
     <span>update title with useEffect hook</span>
    <br/>
     <br/>
     <hr></hr>
     <UpdateCallbackCounter1 memcallback={memoizedCallback} counter={props.counter}></UpdateCallbackCounter1>
    </div>
  );
}
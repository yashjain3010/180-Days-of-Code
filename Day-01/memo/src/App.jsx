import { useMemo } from 'react';
import { useState } from 'react'

function App() {

  const [counter,setCounter] = useState(0);
  const [inputvalue,setInputvalue] = useState(1);

  let count = useMemo(() => {
    let count = 0;
   for(let i = 1 ; i <= inputvalue ; i++){
    count += i;
  }
  return count;
  },[inputvalue])
 
  
  return (
    <div>
    <input onChange={function(e) {
      setInputvalue(e.target.value);
    }} placeholder={'Find a Sum from 1 to n'}/><br/><br />
    Sum from 1 to {inputvalue} is {count}
    <br /><br />
    <button onClick={() => {
      setCounter(counter + 1)
    }}>Counter is ({counter})</button>
    </div>
  )
}

export default App
